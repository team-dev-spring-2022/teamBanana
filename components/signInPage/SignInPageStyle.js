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

  text: {fontSize: 18, color: 'black'},

  textSignUp: {fontSize: 18, textDecorationLine: 'underline', color: '#BEBEBE'},

  button: {
    marginBottom: 15,
    alignItems: 'center',
  },

  signInButton: {
    width: 205,
    height: 48,
    padding: 10,
    borderRadius: 24,
    borderWidth: 0.5,
    borderColor: 'black',
    backgroundColor: '#FFD511',
  },

  signUpButton: {padding: 10},
});

export default styles;
