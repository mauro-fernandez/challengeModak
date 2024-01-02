import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  imageContainer: {
    width: '50%',
    paddingLeft: '5%',
  },
  textContainer: {
    width: '45%',
    alignItems: 'center',
    justifyContent: 'space-around',
    alignContent: 'center',
  },
  image: {
    width: '100%',
    height: 150,
  },
  textTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.turquoiseGreen,
  },
  textArtist: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.turquoiseGreen,
  },
});
