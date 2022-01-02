import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  innerContainer: {
    backgroundColor: 'black',
    flexDirection: 'row',
    shadowColor: 'green',
    shadowOpacity: 1,
    shadowRadius: 100,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 100,
  },
});
