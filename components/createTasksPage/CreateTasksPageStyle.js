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
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  addButton: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    backgroundColor: '#FFD511',
    borderRadius: 30,
  },

  addButtonText: {
    fontSize: 36,
    color: '#000',
  },
});

export default styles;
