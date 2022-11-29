import React from "react";
import { 
        View, 
        Text,
        StyleSheet,
        Image,
        TouchableOpacity
    } from "react-native";

import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native'

export default function Welcome (){
    const navigation = useNavigation();

    return(
        <View style={styles.container}>

        <View style={styles.containerLogo}>
            <Animatable.Image
                animation="flipInY"
                source={require("../../../assets/logo.png")}
                style={{ width: '100%' }}
                resizeMode="contain"
            />
        </View>

        <View style={styles.containerForm}>
            <TouchableOpacity 
            style={styles.button}
            onPress={ () => navigation.navigate('SignIn')}
            >
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </View>

    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'rgb(200, 33, 33)'
    },
    containerLogo:{
        flex:2,
        top: '5%'
    },
    button:{
        position: 'relative',
        backgroundColor: '#ffff',
        borderRadius: 100,
        paddingVertical: 20,
        width: '70%',
        alignSelf: 'center',
        bottom: '50%',
    },
    buttonText:{
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    }
})