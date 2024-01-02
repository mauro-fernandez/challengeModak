import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';

export const styles = StyleSheet.create({
  mainContainer: {
    marginTop: `10%`,
    marginBottom: `10%`,
    paddingHorizontal: `5%`,
  },
  mainInfoContainer: {
    justifyContent: 'space-between'
  },
  mainTitle: {
    fontSize: 30,
    fontWeight: '600',
    color: Colors.mediumGreen
  },
  thumbnailSeparator: {
    borderWidth: 2,
    borderColor: Colors.lightGreen,
    borderRadius: 20,
    marginVertical: 10
  },
  errorText: {
    color: 'red',
  },
  laoderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
