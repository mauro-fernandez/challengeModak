import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {getAllArtwork} from '../Api/artwork';

interface HomeProps {
  title: string;
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
      const apiData = await getAllArtwork(1, 10);
      setArtworks(apiData.data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    handleFetchArtworks();
  }, []);

  return (
    <View>
      {artworks ? (
        <View>
          <Text>Artworks from API:</Text>
          {artworks.map((artwork, index) => (
            <View key={index}>
              <Text>Title: {artwork.title}</Text>
              <Text>Artist: {artwork.artist_display}</Text>
              {/* ... other properties */}
            </View>
          ))}
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
      {error && <Text style={{ color: 'red' }}>Error: {error}</Text>}
    </View>
  );
};

export default Home;
