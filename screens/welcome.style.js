import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'rgb(255, 152, 0)', // Same orange background
  },
  h1: {
    margin: 10,
    fontWeight: 800,
    color: 'white'
  },
  h2: {
    margin: 10,
    fontWeight: 800,
    color: 'white'
  },
  h4: {
    marginVertical: 30,
    fontWeight: 600,
    fontSize: 20,
    color: 'white'
  },
  button: {
    color: '#42a5f5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff8a00'
  },
})


export default styles;