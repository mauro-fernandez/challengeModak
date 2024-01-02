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
  const imageUrl = `https://www.artic.edu/iiif/2/${image_id}/full/1686,/0/default.jpg`;

  const navigation = useNavigation();

  const onPressCard = () => {
    navigation.navigate('DetailScreen', {artworkId: id, myFavorites: myFavorites, addToFavorites: addToFavorites});
  };

  return (
    <>
      <TouchableOpacity
        key={id}
        onPress={onPressCard}
        style={styles.mainContainer}>
        <Image
          source={{uri: imageUrl}}
          resizeMode="contain"
          style={styles.image}
        />
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.text}>{artist}</Text>
      </TouchableOpacity>
    </>
  );
};

export default Thumbnail;
