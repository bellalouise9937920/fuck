import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import database from "./database"
import {Audio} from "expo-av"

export default class Som extends Component () {
    tocarSom = async (som)=> {
     var linkdosom= 'https://s3-whitehatjrcontent.whjr.online/phones/' + som + ".mp3"
     await Audio.Sound.createAsync(
         //uri é um recurso de sequencia de caracteres fora da web
         {uri: linkdosom},
         {shouldPlay: true}
     )
    }
    render () {
        return (
            <View>
                <TouchableOpacity style= {styles.TouchableOpacity}onPress={this.tocarSom(this.props.alfabetoSom)}>
                    <Text style= {styles.TextStyle}>
                        {this.props.alfabeto}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    TouchableOpacity: {
        width: "60%",
        height: 50,
        justifyContent: "center",
        alignItems:"center",
        alignSelf: "center",
        borderRadius: 10,
        margin: 5,
        backgroundColor: "black"
      },
      TextStyle: {
        color: "white"
      },
})