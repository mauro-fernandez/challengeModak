import React, {useEffect, useState} from 'react';
import {styles} from './Home.styles';
import {View, Text, ScrollView} from 'react-native';
import {getAllArtwork} from '../../Api/artwork';
import LoaderComponent from '../Loader/Loader';

interface HomeProps {
  title?: string;
  description?: string;
}

interface Artwork {
  id: number;
  title: string;
  artist_display: string;
  thumbnail: any;
  dimensions: string;
}

const Home: React.FC<HomeProps> = ({title, description}) => {
  const [artworks, setArtworks] = useState<Artwork[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFetchArtworks = async () => {
    try {
      const apiData = await getAllArtwork(1, 30);
      setArtworks(apiData.data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    handleFetchArtworks();
  }, []);

  return (
    <ScrollView
      style={styles.mainContainer}
      contentContainerStyle={styles.mainInfoContainer}>
      {artworks ? (
        <View>
          <Text style={styles.mainTitle}>Artworks</Text>
          {artworks?.map((artwork, index) => (
            <View key={index}>
              <Text>Title: {artwork.title}</Text>
              <Text>Artist: {artwork.artist_display}</Text>
              {/* ... other properties */}
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
