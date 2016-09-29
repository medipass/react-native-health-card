import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  bgImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 8,
  },
  container: {
    borderRadius: 8,
    borderWidth: 0,
    flex: 1,
  },
  logo: {
    height: 35,
    width: 57,
    position: 'absolute',
    top: 20,
    right: 20,
  },
  text: {
    color: '#fff',
  },
  front: {
    flex: 1,
    padding: 20,
  },
  back: {
    flex: 1,
    padding: 20,
  },
  info: {
    flex: 1,
  },
  bar: {
    height: 40,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 30,
    backgroundColor: '#000',
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowNoSpaceBetween: {
    flex: 1,
    flexDirection: 'row',
  },
  title: {
    fontSize: 10,
  },
});
