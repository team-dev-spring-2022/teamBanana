import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 10,
  },

  dateInputContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
  },

  text: {
    fontSize: 18,
    color: 'black',
  },

  inputTask: {
    marginVertical: 10,
    backgroundColor: '#FFFFFF',
    paddingLeft: 20,
    borderRadius: 14,
  },

  dateButton: {
    backgroundColor: '#FFD511',
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
  },

  dateText: {
    backgroundColor: '#FFFFFF',
    position: 'relative',
    padding: 10,
    width: '85%',
    borderRadius: 14,
  },

  addButtonContainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  addButton: {
    width: 180,
    height: 48,
    padding: 10,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFD511',
  },

  addButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default styles;
