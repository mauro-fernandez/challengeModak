import React from 'react';
import { View, Text } from 'react-native';

interface FavouritesProps {
  title?: string;
}

// TODO: Favourite section

const Favourites: React.FC<FavouritesProps> = ({ title, description }) => {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{title}</Text>
    </View>
  );
};

export default Favourites;