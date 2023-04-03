import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
      backgroundColor: 'black',
      flex: 1,
      padding: 24
    },
  
    eventName: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 40
    },
  
    eventDescription: {
      color: '#6b6b6b',
      fontSize: 16,
    },

    form: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10,
      marginTop: 36,
      marginBottom: 42,
    },

    input: {
      flex: 1,
      color: 'white',
      backgroundColor: '#1f1e25',
      height: 56,
      borderRadius: 8,
      padding: 16,
    },

    button: {
      width: 56,
      height: 56,
      borderRadius: 8,
      backgroundColor: '#31cf67',

      justifyContent: 'center',
      alignItems: 'center',
    },

    buttonText:{
      color: 'white',
      fontSize: 24
    }

    
  })