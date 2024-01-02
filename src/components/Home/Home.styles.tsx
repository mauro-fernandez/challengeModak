import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    marginTop: `10%`,
    marginBottom: `10%`,
    paddingHorizontal: `5%`,
  },
  mainInfoContainer: {
    // interfiere con el scroll pero centra el loader VER!!
    //flex: 1,
  //  alignSelf: 'center',
  //  justifyContent: 'center'
  justifyContent: 'space-between'
  },
  mainTitle: {
    fontSize: 30,
    fontWeight: '600',
    color: `#3700B3`
  },
  thumbnailSeparator: {
    borderColor: "red",
    borderWidth: 1,
    paddingVertical: 40,
    marginVertical: 10
  }
});
