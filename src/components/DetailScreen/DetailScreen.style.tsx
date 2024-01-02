import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: '5%',
    paddingVertical: '5%',
  },
  scrollViewContainer: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: Colors.pastelGreen,
    borderWidth: 2,
    borderColor: Colors.lightGreen,
    borderRadius: 20,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: Colors.neutralBlack,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: Colors.neutralBlack,
    marginBottom: 10,
  },
  imageContainer: {
    flex: 1,
    borderWidth: 2,
    borderColor: Colors.lightGreen,
    borderRadius: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderWidth: 2,
    borderColor: Colors.lightGreen,
    borderRadius: 20,
  },
  manyBoxContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  separator: {
    marginHorizontal: 5
  },
  boxContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.lightGreen,
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    alignItems: 'center',
    borderRadius: 20,
    padding: 7,
  },
  boxTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.neutralBlack
  },
  boxSubtitle: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.neutralBlack,
  },
  extraMargin: {
    marginTop: 10,
    marginBottom: 40
  },
  buttonLeft: {
    position: 'absolute',
    bottom: 16,
    left: 40,
    padding: 20,
    borderRadius: 40,
    backgroundColor: Colors.primaryBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonRight: {
    position: 'absolute',
    bottom: 16,
    right: 40,
    padding: 20,
    borderRadius: 40,
    borderColor: Colors.heartRed,
    borderWidth: 2,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  laoderContainer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
});
