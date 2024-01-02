import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from './Thumbnail.style';
import {useNavigation} from '@react-navigation/native';

interface ThumbnailProps {
  id?: number;
  title?: string;
  artist?: string;
  image_id?: string;
  addToFavorites: any;
  myFavorites: string[];
}

const Thumbnail: React.FC<ThumbnailProps> = ({id, title, artist, image_id, myFavorites, addToFavorites }) => {
  const navigation = useNavigation();
  
  const imageUrl = `https://www.artic.edu/iiif/2/${image_id}/full/600,/0/default.jpg`;

  const onPressCard = () => {
    navigation.navigate('DetailScreen', {artworkId: id, myFavorites: myFavorites, addToFavorites: addToFavorites});
  };

  return (
    <>
      <TouchableOpacity
        key={id}
        onPress={onPressCard}
        style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: imageUrl}}
            resizeMode="contain"
            style={styles.image}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textTitle}>{title}</Text>
          <Text style={styles.textArtist}>{`by ${artist}`}</Text>

        </View>
      </TouchableOpacity>
    </>
  );
};

export default Thumbnail;
