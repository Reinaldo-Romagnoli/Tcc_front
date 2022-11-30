import React from "react";
import { 
    View, 
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from "react-native";

import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';

export default function ResetPt2(){
    const navigation = useNavigation();

    return(
        <View style={styles.container}>

        <View style={styles.containerLogo}>
            <Animatable.Image
                animation="flipInY"
                source={require("../../../assets/logo.png")}
                style={{ width: '100%', size:'20%' }}
                resizeMode='center'
            />
        </View>

            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Esqueceu a senha</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Insira seu email ou número de celular para procurar a sua conta.</Text>
                <TextInput
                    placeholder="Email ou numero de celular"
                    style={styles.input}
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Continuar</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.buttonCancel}
                onPress={ () => navigation.navigate('SignIn')}
                >
                    <Text style={styles.cancelText}>Cancelar</Text>
                </TouchableOpacity>

            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#ffff'
    },
    containerHeader:{
        marginTop: '1%',
        marginBottom: '8%',
        paddingStart: '5%'
    },
    message:{
        fontSize: 25,
        fontWeight: 'bold'
    },
    containerForm:{
        flex:1,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title:{
        fontSize: 20,
        marginTop: 28,
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button:{
        backgroundColor: '#118AB2',
        width: '100%',
        borderRadius: 6,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonCancel:{
        backgroundColor: '#c1c7c5',
        width: '100%',
        borderRadius: 6,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cancelText:{
        color: '#6b706e',
        fontSize: 18,
        fontWeight: 'bold'
    }
})