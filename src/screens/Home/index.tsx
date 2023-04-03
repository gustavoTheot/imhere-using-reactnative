import {Text, TextInput, View, TouchableOpacity} from 'react-native'
import { Participant } from '../../components/Participant'
import {styles} from './styles'

export function Home(){
    function handleParticipantAdd(){
        console.log('Add participant')
    }
  return(
    <View style={styles.container}>
          <Text style={styles.eventName}>Nome do evento</Text>
          <Text style={styles.eventDescription}>Teste sobre uma tela básica utlizando React Native</Text>

        <View style={styles.form}>
            <TextInput style={styles.input} placeholder='Escreva algo' placeholderTextColor='white' keyboardType='default'/>
            <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                <Text style={styles.buttonText}>
                    +
                </Text>
            </TouchableOpacity>
        </View>

        <Participant/>

    </View>
  )
}