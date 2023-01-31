import React from "react";
import { 
    Text,
    View,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    TextInput,
    TouchableOpacity
} from "react-native";

import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';
import { ScrollView } from "react-native-gesture-handler";

export default function Students(){
    const navigation = useNavigation();

    return(
        <KeyboardAvoidingView 
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}>
            
            <ScrollView>

                <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                    <Text style={styles.message}>Alunos</Text>
                </Animatable.View>

                <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                    
                    <TouchableOpacity
                    style={styles.card}
                    onPress={ () => navigation.navigate('Notes')}
                    >
                        <Text style={styles.text}>Augusto de Souza Ferreira </Text>
                        <Text style={styles.text}>CGM:123456789 </Text>
                        <Text style={styles.text}>3° A </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    style={styles.card}
                    onPress={ () => navigation.navigate('Notes')}
                    >
                        <Text style={styles.text}>Maria Fernanda Oliveira</Text>
                        <Text style={styles.text}>CGM:987654321</Text>
                        <Text style={styles.text}>1° A</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    style={styles.button}
                    onPress={ () => navigation.navigate('Insert')}
                    >
                        <Text style={styles.buttonText}>Adicionar alunos +</Text>
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
        paddingStart: '5%',
        height: 60,
        marginTop: 20,
        width: '100%',
        backgroundColor: '#118AB2',
        
    },
    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#ffff',
        top: '20%'
    },
    containerForm:{
        flex:1,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    button:{
        backgroundColor: '#118AB2',
        width: '100%',
        borderRadius: 10,
        paddingVertical: 10,
        marginTop: 330,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10
    },
    buttonText:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    card:{
        flex: 1,
        width: '100%',
        height: '20%',
        paddingVertical: 10,
        backgroundColor: '#56d3fc',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginBottom: '8%',
        elevation: 20,
        shadowColor: '#52006A',
    }, 
    text: {
        color: '#0a0a0a',
        fontSize: 18,
        fontWeight: 'bold'  
    }
})