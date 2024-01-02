import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  fatherContainer: {
    flex: 1,
  },
  mainContainer: {
    marginTop: `10%`,
    paddingHorizontal: `5%`,
    marginBottom: `10%`,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: "center",
    textAlignVertical: "center",
    color: "#191919"
  },
  subTitle: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: "center",
    textAlignVertical: "center",
    color: "#191919",
    marginBottom: 10
  },
  imageContainer: {
    flex: 1,
    borderWidth: 2,
    borderColor: `#3700B3`,
    borderRadius: 20,
    height: 204,
  },
  image: {
    width: '100%',
    height: 200, // Adjust the height as needed
  },
  container: {
    flexGrow: 1,
    padding: 16,
    
    borderWidth: 2,
    borderColor: `#3700B3`,
    borderRadius: 20
  },
  buttonLeft: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#3498db',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonRight: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#ff3377', // Adjust the color as needed
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
