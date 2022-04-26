import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputContainer: {
    width: '75%',
    marginTop: 80,
    marginBottom: 50,
  },

  inputText: {
    backgroundColor: '#FFFFFF',
    margin: 10,
    paddingLeft: 20,
    borderRadius: 14,
  },

  text: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },

  signUpButton: {
    width: 205,
    height: 48,
    padding: 10,
    borderRadius: 24,
    backgroundColor: '#FFD511',
    alignItems: 'center',
    justifyContent: 'center',
  },

  signUpButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

export default styles;
