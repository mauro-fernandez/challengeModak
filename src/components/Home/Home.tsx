import React, {useEffect, useState} from 'react';
import {styles} from './Home.styles';
import {View, Text, ScrollView} from 'react-native';
import {getAllArtwork} from '../../Api/artwork';
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

  const handleFetchArtworks = async () => {
    try {
      const apiData = await getAllArtwork(1, 10);
      console.log(apiData.data.image)

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
      contentContainerStyle={styles.mainInfoContainer}
      >
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
