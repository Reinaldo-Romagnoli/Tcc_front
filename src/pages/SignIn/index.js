import React from "react";
import { 
    View, 
    Text,
    StyleSheet,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    TouchableOpacity
} from "react-native";

import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';

export default function SignIn(){
    const navigation = useNavigation();

    return(
        <KeyboardAvoidingView 
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
        keyboardVerticalOffset={80}>

        <View style={styles.containerLogo}>
            <Animatable.Image
                animation="flipInY"
                source={require("../../../assets/logo.png")}
                style={{ width: '100%', size:'20%' }}
                resizeMode='center'
            />
        </View>

            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Bem-vindo(a) Responsavel</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Email</Text>
                <TextInput
                    placeholder="Digite um email..."
                    style={styles.input}
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput
                    secureTextEntry={true}
                    placeholder="Digite sua senha"
                    style={styles.input}
                />

                <TouchableOpacity 
                style={styles.button}
                onPress={ () => navigation.navigate('Students')}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.buttonRegister}
                onPress={ () => navigation.navigate('Register')}
                >
                    <Text style={styles.registerText}>Cadastrar-se</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.buttonRemember}
                onPress={ () => navigation.navigate('ResetPassword')}
                >
                    <Text style={styles.rememberText}>Esqueceu a senha?</Text>
                </TouchableOpacity>
            </Animatable.View>

        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#ffff',
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
    buttonRemember: {
        marginTop: 14,
        alignSelf: 'center',
    },
    rememberText:{
        color: '#2893d1'
    },
    buttonRegister:{
        width: '60%',
        marginTop: 17,
        alignSelf: 'center',
        alignItems: 'center',
    },
    registerText:{
        fontSize: 19
    }
})