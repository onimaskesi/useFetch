import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'green',
    margin: 5,
    elevation: 7,
    paddingBottom: 5,
  },
  titleContainer: {
    borderWidth: 2,
    borderColor: 'orange',
    margin: 5,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: 'black',
    shadowColor: 'yellow',
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 100,
  },
  title: {
    color: 'yellow',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 5,
  },
  text: {
    fontSize: 18,
    padding: 5,
    textAlign: 'center',
    color: 'lightgreen',
  },
});
