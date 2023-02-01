import React, { useState } from "react";
import { 
    Text,
    View,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,

} from "react-native";

import * as Animatable from 'react-native-animatable';

import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from "react-native-gesture-handler";


export default function Absences(){
    const navigation = useNavigation();

    const [portuguesExpanded, setPortuguesExpanded] = useState(false);
      const [matematicaExpanded, setMatematicaExpanded] = useState(false);
      const [historyExpanded, setHistoryExpandedExpanded] = useState(false);
      const [artExpanded, setArtExpanded] = useState(false);
      const [physical_educationExpanded, setPhysical_educationExpanded] = useState(false);
    

    return(
      <KeyboardAvoidingView 
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}>
        <ScrollView>
                <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                    <Text style={styles.message}>Faltas</Text>
                </Animatable.View>

                <Animatable.View animation="fadeInUp" style={styles.containerForm}>

                <View>
                  <TouchableOpacity onPress={() => setPortuguesExpanded(!portuguesExpanded)}>
                    <Text style={styles.card}>
                      <Text style={styles.message}>{portuguesExpanded  ? 'Portugues' : 'Portugues' }</Text>
                    </Text>
                  </TouchableOpacity>
                  {portuguesExpanded  && (
                    <View>
                      <Text style={styles.card2}>Faltas:  18</Text>
                      <Text style={styles.card2}>Presenças:  50</Text>
                    </View>
                  )}
                  </View>

                  <View>
                  <TouchableOpacity onPress={() => setMatematicaExpanded(!matematicaExpanded)}>
                    <Text style={styles.card}>
                      <Text style={styles.message}>{matematicaExpanded  ? 'Matematica' : 'Matematica' }</Text>
                    </Text>
                  </TouchableOpacity>
                  {matematicaExpanded && (
                    <View>
                      <Text style={styles.card2}>Faltas:  18</Text>
                      <Text style={styles.card2}>Presenças:  50</Text>
                    </View>
                  )}
                  </View>

                  <View>
                  <TouchableOpacity onPress={() => setHistoryExpandedExpanded(!historyExpanded)}>
                    <Text style={styles.card}>
                      <Text style={styles.message}>{historyExpanded  ? 'Historia' : 'Historia' }</Text>
                    </Text>
                  </TouchableOpacity>
                  {historyExpanded && (
                    <View>
                      <Text style={styles.card2}>Faltas:  18</Text>
                      <Text style={styles.card2}>Presenças:  50</Text>
                    </View>
                  )}
                  </View>

                  <View>
                  <TouchableOpacity onPress={() => setArtExpanded(!artExpanded)}>
                    <Text style={styles.card}>
                      <Text style={styles.message}>{artExpanded  ? 'Artes' : 'Artes' }</Text>
                    </Text>
                  </TouchableOpacity>
                  {artExpanded && (
                    <View>
                      <Text style={styles.card2}>Faltas:  18</Text>
                      <Text style={styles.card2}>Presenças:  50</Text>
                    </View>
                  )}
                  </View>

                  <View>
                  <TouchableOpacity onPress={() => setPhysical_educationExpanded(!physical_educationExpanded)}>
                    <Text style={styles.card}>
                      <Text style={styles.message}>{physical_educationExpanded  ? 'Educação Fisica' : 'Educação Fisica' }</Text>
                    </Text>
                  </TouchableOpacity>
                  {physical_educationExpanded && (
                    <View>
                      <Text style={styles.card2}>Faltas:  18</Text>
                      <Text style={styles.card2}>Presenças:  50</Text>
                    </View>
                    
                  )}
                  </View>

                </Animatable.View>
                </ScrollView>
                <View style={styles.navbar}>
                <TouchableOpacity 
                style={styles.button}
                onPress={ () => navigation.navigate('Students')}
                >
                  <Icon name="user" size={25} color="#ffff" />
                  <Text style={styles.buttonText}>Alunos</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.button}
                onPress={ () => navigation.navigate('Notes')}
                >
                  <Icon name="profile" size={25} color="#ffff" />
                  <Text style={styles.buttonText}>Notas</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.button}
                onPress={ () => navigation.navigate('Absences')}
                >
                  <Icon2 name="clipboard-check-outline" size={25} color="#ffff" />
                  <Text style={styles.buttonText}>Faltas</Text>
                </TouchableOpacity>
              </View>
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
  navbar:{
      flexDirection: 'row',
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
    justifyContent: 'space-between',
    backgroundColor: '#118AB2',
    width: '34%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10
},
  buttonText: {
      flexDirection: 'row',
      color: '#fff',
      fontWeight: 'bold',
  },
  card:{
    backgroundColor: '#40d6ed',
    textAlign: 'center',
    fontSize: 28,
    borderRadius: 15,
    marginVertical: 10,
  },
  card2:{
    textAlign: 'center',
    fontSize: 19,
    fontWeight: 'normal',
  }
})