import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import {styles} from './DetailScreen.style';
import {useNavigation, useRoute} from '@react-navigation/native';
import {getOneArtworkById} from '../../Api/artwork';
import Icon from 'react-native-vector-icons/AntDesign'; // Import the icon library
import LoaderComponent from '../Loader/Loader';

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
      console.log(apiData.data);

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

  const descriptionFormatter = artworks?.description
    ? artworks?.description.replace(/<[^>]*>/g, '')
    : 'No description available';

  return (
    <>
      {artworks && artworksImage ? (
        <View style={styles.mainContainer}>
          <ScrollView
            contentContainerStyle={styles.scrollViewContainer}
            showsVerticalScrollIndicator={false}>
            <Text style={styles.mainTitle}>{artworks?.title}</Text>
            <Text
              style={styles.subTitle}>{`by ${artworks?.artist_title}`}</Text>

            <Image
              source={{uri: imageUrl}}
              resizeMode="contain"
              style={styles.image}
            />
            <View style={styles.manyBoxContainer}>
              <View style={styles.boxContainer}>
                <Text style={styles.boxTitle}>Year of display</Text>
                <Text style={styles.boxSubtitle}>{artworks?.date_display}</Text>
              </View>
              <View style={styles.separator} />
              <View style={styles.boxContainer}>
                <Text style={styles.boxTitle}>Place of origin</Text>
                <Text style={styles.boxSubtitle}>
                  {artworks?.place_of_origin}
                </Text>
              </View>
            </View>
            <View style={styles.boxContainer}>
              <Text style={styles.boxTitle}>Dimensions</Text>
              <Text style={styles.boxSubtitle}>
                {`${artworks?.thumbnail.width} cm x ${artworks?.thumbnail.height} cm`}
              </Text>
            </View>

            <View style={[styles.boxContainer, styles.extraMargin]}>
              <Text style={styles.boxTitle}>Description</Text>

              <Text style={styles.boxSubtitle}>{descriptionFormatter}</Text>
            </View>
          </ScrollView>

          <TouchableOpacity style={styles.buttonLeft} onPress={handleGoBack}>
            <Icon name="back" size={35} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonRight}
            onPress={handleAddToFavorites}>
            <Icon name="heart" size={35} color="white" />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.laoderContainer}>
          <LoaderComponent />
        </View>
      )}
    </>
  );
};

export default DetailScreenProps;
