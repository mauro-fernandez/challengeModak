import React, {useEffect, useState} from 'react';
import {styles} from './Home.styles';
import {View, Text, ScrollView} from 'react-native';
import {getAllArtwork} from '../../Api/artwork';
import {getFavorites, addToFavorites} from '../../utils/functions';
import LoaderComponent from '../Loader/Loader';
import Thumbnail from '../Thumbnail/Thumbnail';

interface HomeProps {
  title?: string;
  description?: string;
}

interface Artwork {
  id: number;
  title: string;
  image_id: string;
  artist_title: string;
  thumbnail: any;
  dimensions: string;
}

const Home: React.FC<HomeProps> = ({title, description}) => {
  const [artworks, setArtworks] = useState<Artwork[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);

  const handleFetchArtworks = async () => {
    try {
      const apiData = await getAllArtwork(1, 10);
      setArtworks(apiData.data);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleFetchFavorites = async () => {
    const retrievedFavorites = await getFavorites();
    setFavorites(retrievedFavorites);
  };

  useEffect(() => {
    handleFetchArtworks();
    handleFetchFavorites();
  }, []);

  const handleAddToFavorites = async (artworkId: string) => {
    const isArtworkInFavorites = favorites.includes(artworkId);

    const updatedFavorites = isArtworkInFavorites
      ? favorites.filter(favoriteId => favoriteId !== artworkId)
      : [...favorites, artworkId];

    setFavorites(updatedFavorites);

    try {
      await addToFavorites(artworkId);
    } catch (error) {
      console.error('Error updating favorites in AsyncStorage:', error);
    }
  };

  return (
    <ScrollView
      style={styles.mainContainer}
      contentContainerStyle={styles.mainInfoContainer}>
      {artworks ? (
        <View>
          <Text style={styles.mainTitle}>Artworks</Text>

          {artworks?.map((artwork, index) => (
            <View style={styles.thumbnailSeparator} key={index}>
              <Thumbnail
                id={artwork.id}
                title={artwork.title}
                artist={artwork.artist_title}
                image_id={artwork.image_id}
                addToFavorites={handleAddToFavorites}
                myFavorites={favorites}
              />
            </View>
          ))}
        </View>
      ) : (
        <LoaderComponent />
      )}
      {error && <Text style={{color: 'red'}}>Error: {error}</Text>}
    </ScrollView>
  );
};

export default Home;
