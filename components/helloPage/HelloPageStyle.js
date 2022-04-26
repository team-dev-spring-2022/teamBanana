import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 300,
    height: 300,
    marginBottom: 20,
    resizeMode: 'contain',
  },

  text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },

  button: {
    width: 205,
    height: 48,
    padding: 10,
    marginBottom: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
  },

  signInButton: {
    backgroundColor: '#FFD511',
  },

  signUpButton: {
    backgroundColor: '#C4C4C4',
  },
});

export default styles;
