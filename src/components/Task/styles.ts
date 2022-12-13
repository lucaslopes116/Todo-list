import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    minWidth: 327,
    height: 64,
    marginHorizontal: 24,
    flexDirection: 'row',
    backgroundColor: '#262626',
    alignItems: 'center',
    marginBottom: 8,
  },
  checkbox: {
    alignSelf: 'center',
    borderRadius: 50,
    margin: 15,
  },
  finished: {
    textDecorationLine: 'line-through',
    color: '#808080',
    flex: 1,
    fontSize: 14,
    fontWeight: '400',
  },
  name: {
    flex: 1,
    color: '#F2F2F2',
    fontSize: 14,
    fontWeight: '400',
  },
  button: {
    width: 32,
    height: 32,
    margin: 15,
  },
});
