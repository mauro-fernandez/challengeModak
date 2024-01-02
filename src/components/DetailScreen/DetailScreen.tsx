import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import {styles} from './DetailScreen.style';
import {useNavigation, useRoute} from '@react-navigation/native';
import {getOneArtworkById} from '../../Api/artwork';

interface Artwork {
  id: number;
  title: string;
  image_id: string;
  artist_title: string;
  thumbnail: any;
  dimensions: string;
  description: string;
  place_of_origin: string;
  date_display: string;
}

const DetailScreenProps: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {artworkId} = route.params;

  const [artworks, setArtworks] = useState<Artwork | null>(null);
  const [artworksImage, setArtworksImage] = useState<Artwork | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFetchArtworks = async () => {
    try {
      const apiData = await getOneArtworkById(artworkId);
      console.log(apiData.data)

      setArtworks(apiData.data);
      setArtworksImage(apiData.data.image_id);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    handleFetchArtworks();
  }, []);

  const imageUrl = `https://www.artic.edu/iiif/2/${artworksImage}/full/1686,/0/default.jpg`;

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleAddToFavorites = () => {

    console.log('Added to favorites!');
  };

  return (
    <View style={styles.fatherContainer}>
      <ScrollView 
       // style={styles.mainContainer}
        contentContainerStyle={styles.container}
      >
        <Text style={styles.mainTitle}>{artworks?.title}</Text>
        <Text style={styles.subTitle}>{`by ${artworks?.artist_title}`}</Text>
        <View style={styles.imageContainer}>
          <Image
              source={{uri: imageUrl}}
              resizeMode="contain"
              style={styles.image}
            />

        </View>

        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{artworks?.date_display}</Text>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{artworks?.thumbnail.width}</Text>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{artworks?.thumbnail.height}</Text> 
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{artworks?.place_of_origin}</Text>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{artworks?.description}</Text>

      </ScrollView>

      <TouchableOpacity style={styles.buttonLeft} onPress={handleGoBack}>
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRight} onPress={handleAddToFavorites}>
          <Text style={styles.buttonText}>Add to Favorites</Text>
        </TouchableOpacity>
      </View>
  );
};

export default DetailScreenProps;
