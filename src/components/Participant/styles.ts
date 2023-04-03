import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    containerParticipant: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },

    informParticipant: {
        flex: 1,
        color: 'white',
        backgroundColor: '#1f1e25',
        height: 56,
        borderRadius: 8,
        padding: 16,
    },

    buttonsRemove: {
        width: 56,
        height: 56,
        borderRadius: 8,
        backgroundColor: '#E23C44',
  
        justifyContent: 'center',
        alignItems: 'center',
      },
  
      buttonText:{
        color: 'white',
        fontSize: 24
      }
})
