import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function Participant(){
    return(
        <View style={styles.containerParticipant}>
            <Text style={styles.informParticipant}>
                Name participant
            </Text>

            <TouchableOpacity style={styles.buttonsRemove}>
                <Text style={styles.buttonText}>
                    -
                </Text>
            </TouchableOpacity>
        </View>
    )
}