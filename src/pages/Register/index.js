import React from "react";
import { 
    View, 
    Text,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    TextInput,
    TouchableOpacity
} from "react-native";

import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';
import { ScrollView } from "react-native-gesture-handler";

export default function Register(){
    const navigation = useNavigation();

    return(
        <KeyboardAvoidingView 
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}>
            
            <ScrollView>

            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation="flipInY"
                    source={require("../../../assets/logo.png")}
                    style={{ width: '100%', size:'20%' }}
                    resizeMode='center'
                />
            </View>

                <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                    <Text style={styles.message}>Cadastrar-se</Text>
                </Animatable.View>

                <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                    <Text style={styles.title}>Email</Text>
                    <TextInput
                        placeholder="Digite um email"
                        style={styles.input}
                    />

                    <Text style={styles.title}>Celular</Text>
                    <TextInput
                        placeholder="Digite o numero celular"
                        style={styles.input}
                    />

                    <Text style={styles.title}>Senha</Text>
                    <TextInput
                        placeholder="Digite sua senha"
                        style={styles.input}
                        secureTextEntry={true}
                    />

                    <Text style={styles.title}>Repita a Senha</Text>
                    <TextInput
                        placeholder="Digite sua senha novamente"
                        style={styles.input}
                        secureTextEntry={true}
                    />

                    <TouchableOpacity 
                    style={styles.button}
                    onPress={ () => navigation.navigate('SignIn')}
                    >
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    style={styles.button2}
                    onPress={ () => navigation.navigate('SignIn')}
                    >
                        <Text style={styles.buttonText}>Cancelar</Text>
                    </TouchableOpacity>

                </Animatable.View>
            </ScrollView>
        </KeyboardAvoidingView>
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
        fontSize: 15,
        marginTop: 20,
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
    button2:{
        backgroundColor: '#c2c2c2',
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
    }
})