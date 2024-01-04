import AsyncStorage from '@react-native-async-storage/async-storage';
import {PermissionsAndroid} from 'react-native';
import messaging from '@react-native-firebase/messaging'

// ASYNC STORAGE
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


// FIREBASE - PERMISSIONS
export const checkNotificationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Permiso concedido para notificaciones');
      await requestPermission()
    } else {
      console.log('Permiso denegado para notificaciones');
    }
  } catch (error) {
    console.error('Error al solicitar permisos:', error);
  }
};

// FIREBASE - NOTIFICATIONS

export const notificationListener = () => {
  
  messaging().onNotificationOpenedApp((remoteMessage: { notification: any; }) => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );

  });
  // Check whether an initial notification is available
  messaging()
    .getInitialNotification()
    .then((remoteMessage: { notification: any; }) => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
      
      }
   
    });
}

export const requestPermission = async () => {
  try {
    await messaging().requestPermission();
    const token = await messaging().getToken();
    console.log('FCM Token:', token);
  } catch (error) {
    console.error('Permission Denied:', error);
  }
};