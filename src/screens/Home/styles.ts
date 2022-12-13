import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1A1A1A',
    justifyContent: 'center',
    height: '100%',
  },
  form: {
    position: 'relative',
    top: -30,
    width: '100%',
    paddingHorizontal: 24,
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    backgroundColor: '#262626',
    borderColor: '#0D0D0D',
    color: '#F2F2F2',
    paddingLeft: 16,
    paddingBottom: 16,
    paddingTop: 16,
    borderRadius: 6,
    minWidth: 271,
    height: 54,
    marginRight: 4,
    marginBottom: 32,
    fontWeight: '400',
    fontSize: 16,
  },
  button: {
    width: 52,
    height: 52,
    borderRadius: 6,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tasksInfo: {
    width: '100%',
    backgroundColor: '#1A1A1A',
  },
  taskController: {
    paddingHorizontal: 24,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  create: {
    // fontFamily: 'Inter',

    color: '#4EA8DE',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 17,
    marginRight: 8,
  },
  finished: {
    color: '#8284FA',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 17,
    marginRight: 8,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  listEmptyText: {
    marginTop: 16,
    color: '#808080',
    fontWeight: '400',
    fontSize: 14,
  },
  zero: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 25,
    borderRadius: 999,
    backgroundColor: '#333333',
  },
  resultContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  result: {
    color: '#FFFFFF',
  },
});
