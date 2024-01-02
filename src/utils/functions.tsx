import AsyncStorage from '@react-native-async-storage/async-storage';

export const addToFavorites = async (artworkId: string) => {
  try {
    // Retrieve existing favorites
    const existingFavorites = await AsyncStorage.getItem('favorites');

    // Parse the existing favorites or initialize an empty array
    const favorites = existingFavorites ? JSON.parse(existingFavorites) : [];

    // Check if artworkId is already in favorites
    const index = favorites.indexOf(artworkId);

    if (index !== -1) {
      // Remove artworkId if it's already in favorites
      favorites.splice(index, 1);
    } else {
      // Add artworkId if it's not in favorites
      favorites.push(artworkId);
    }

    // Save the updated favorites back to AsyncStorage
    await AsyncStorage.setItem('favorites', JSON.stringify(favorites));

  } catch (error) {
    console.error('Error updating favorites:', error);
    throw error;
  }
};

export const getFavorites = async () => {
  try {
    // Retrieve favorites from AsyncStorage
    
    const favorites = await AsyncStorage.getItem('favorites');

    // Parse the favorites or initialize an empty array
    return favorites ? JSON.parse(favorites) : [];
  } catch (error) {
    console.error('Error retrieving favorites:', error);
    return [];
  }
};
