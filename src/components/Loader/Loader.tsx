import React from 'react';
import {styles} from './loader.styles';
import {View, ActivityIndicator} from 'react-native';

const LoaderComponent: React.FC = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={60} color="#6200EE" />
      {/* TODO: Loading Text with animations*/}
    </View>
  );
};

export default LoaderComponent;
