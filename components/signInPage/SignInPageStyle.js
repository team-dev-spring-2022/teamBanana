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
    fontWeight: 'bold',
    color: 'black',
  },

  textSignUp: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  textSignUpPassword: {
    fontSize: 16,
    textDecorationLine: 'underline',
    color: '#BEBEBE',
  },

  button: {
    marginBottom: 15,
    alignItems: 'center',
  },

  signInButton: {
    width: 205,
    height: 48,
    padding: 10,
    borderRadius: 24,
    backgroundColor: '#FFD511',
    alignItems: 'center',
    justifyContent: 'center',
  },

  signUpButton: {padding: 10},
});

export default styles;
