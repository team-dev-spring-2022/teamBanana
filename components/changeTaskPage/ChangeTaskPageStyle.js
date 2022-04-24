import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 10,
  },

  checkedContainer: {
    backgroundColor: '#FFD511',
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },

  checkedButton: {
    width: 22,
    height: 22,
    borderWidth: 3,
    borderColor: 'rgba(0,0,0,0.5)',
    borderRadius: 5,
  },

  buttonContainer: {
    marginVertical: 40,
    alignItems: 'center',
    justifyContent: 'center',
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
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  addButtonText: {
    fontSize: 20,
    color: '#000',
  },

  addremoveButton: {
    width: 180,
    height: 48,
    padding: 10,
    borderRadius: 24,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    backgroundColor: '#FFD511',
  },
});

export default styles;
