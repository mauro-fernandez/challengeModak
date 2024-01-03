import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.lightGrey
  },
  mainInfoContainer: {
    paddingTop: `5%`,
    paddingBottom: `5%`,
    paddingHorizontal: `5%`,
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
    marginVertical: 10,
    backgroundColor: Colors.white,
    elevation: 5
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
