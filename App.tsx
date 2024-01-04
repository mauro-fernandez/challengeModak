import React, {useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/components/Home/Home.tsx';
import Favourites from './src/components/Favourites/Favourites.tsx';
import DetailScreen from './src/components/DetailScreen/DetailScreen.tsx';

import { Alert, Linking } from 'react-native';
// Firebase
import {
  checkNotificationPermission,
  requestPermission,
  notificationListener
} from './src/utils/functions.tsx';
import messaging from '@react-native-firebase/messaging';


const Stack = createStackNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  
  useEffect(() => {
    checkNotificationPermission()
    // requestPermission();
    notificationListener();
  }, []);


  useEffect(() => {
    const handleNotification = async (remoteMessage) => {
      const { notification, data} = remoteMessage;

      if (notification) {
        const bodyTitle = notification.title
        const bodyText = notification.body;
        Alert.alert(bodyTitle, bodyText,  [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ])
      }
    };

    const unsubscribe = messaging().onMessage(handleNotification);

    return unsubscribe;
  }, []);


  
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[backgroundStyle, styles.appContainer]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={() => ({
              headerShown: false,
            })}
          />
          <Stack.Screen
            name="Favourites"
            component={Favourites}
            options={() => ({
              headerShown: false,
            })}
          />
          <Stack.Screen
            name="DetailScreen"
            component={DetailScreen}
            options={() => ({
              headerShown: false,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1
  },
});

export default App;
