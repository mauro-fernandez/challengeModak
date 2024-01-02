import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: '5%',
    paddingVertical: '5%',
  },
  scrollViewContainer: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#83d0c9',
    borderWidth: 2,
    borderColor: '#009688',
    borderRadius: 20,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#191919',
  },
  subTitle: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#191919',
    marginBottom: 10,
  },
  imageContainer: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#009688',
    borderRadius: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderWidth: 2,
    borderColor: '#009688',
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
    borderColor: '#009688',
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
    color: '#191919',
  },
  boxSubtitle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#191919',
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
    backgroundColor: '#3498db',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonRight: {
    position: 'absolute',
    bottom: 16,
    right: 40,
    padding: 20,
    borderRadius: 40,
    borderColor: '#ff3377',
    borderWidth: 2,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  laoderContainer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
});
