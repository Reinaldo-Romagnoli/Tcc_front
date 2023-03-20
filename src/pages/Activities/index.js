import React, { useState } from "react";
import { 
    Text,
    View,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    Animated,
    TextInput,
    TouchableOpacity,
} from "react-native";

import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

import Icon from 'react-native-vector-icons/AntDesign';

import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';

import { ScrollView } from "react-native-gesture-handler";


export default function Activities(){
    const navigation = useNavigation();
    
      const [portuguesExpanded, setPortuguesExpanded] = useState(false);
      const [matematicaExpanded, setMatematicaExpanded] = useState(false);
      const [historyExpanded, setHistoryExpandedExpanded] = useState(false);
      const [artExpanded, setArtExpanded] = useState(false);
      const [physical_educationExpanded, setPhysical_educationExpanded] = useState(false);

      const state = {
        tableHead: ['Atividades', '                      Avaliação'],
        tableData: [
          ['Leitura e interpretação de textos', 'Execelente'],
          ['Análise e correção gramatical', 'Satisfatório'],
          ['Aprendizagem de vocabulário', 'Satisfatório'],
          ['Leitura e análise de poesias', 'Satisfatório']
        ],
        tableHead2: ['Atividades', '                      Avaliação'],
        tableData2: [
          ['Adição e Subtração', 'Execelente'],
          ['Multiplicação', 'Satisfatório'],
          ['Divisão', 'Satisfatório'],
          ['Fração', 'Satisfatório']
        ],
        tableHead3: ['Atividades', '                      Avaliação'],
        tableData3: [
          ['Proclamação da Replúbica', 'Execelente'],
          ['Pré-História', 'Satisfatório'],
          ['A População Brasileira', 'Satisfatório'],
          ['O Surgimento do Comércio', 'Satisfatório']
        ],
        tableHead4: ['Atividades', '                      Avaliação'],
        tableData4: [
          ['Danças Nacionais', 'Execelente'],
          ['Estilos e Gêneros Musicais', 'Satisfatório'],
          ['Patrimônio Historico Cultural', 'Satisfatório'],
          ['O Artesanato', 'Satisfatório']
        ],
        tableHead5: ['Atividades', '                      Avaliação'],
        tableData5: [
          ['Corrida livre', 'Execelente'],
          ['Alongamento', 'Satisfatório'],
          ['Aquecimento', 'Satisfatório'],
          ['Futebol', 'Satisfatório']
        ],
      };

    return(
        <KeyboardAvoidingView 
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}>
            
            <ScrollView>

                <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                    <Text style={styles.message}>Atividades</Text>
                </Animatable.View>

                  <Animatable.View animation="fadeInUp" style={styles.containerForm}>

                  <View>
                  <TouchableOpacity onPress={() => setPortuguesExpanded(!portuguesExpanded)}>
                    <Text style={styles.card}>
                      <Text style={styles.message}>{portuguesExpanded  ? 'Portugues' : 'Portugues' }</Text>
                    </Text>
                  </TouchableOpacity>
                  {portuguesExpanded  && (
                      <Table>
                        <Row data={state.tableHead} flexArr={[1, 2]} style={styles.head} textStyle={styles.text} />
                        <TableWrapper style={styles.wrapper}>
                            <Col data={state.tableTitle} style={styles.title} heightArr={[30,30]} textStyle={styles.text} />
                            <Rows data={state.tableData} flexArr={[2, 1, 1]} style={styles.row} textStyle={styles.text2} />
                        </TableWrapper>
                    </Table>     
                  )}
                  </View>

                  <View>
                  <TouchableOpacity onPress={() => setMatematicaExpanded(!matematicaExpanded)}>
                    <Text style={styles.card}>
                      <Text style={styles.message}>{matematicaExpanded  ? 'Matematica' : 'Matematica' }</Text>
                    </Text>
                  </TouchableOpacity>
                  {matematicaExpanded && (
                    <Table>
                    <Row data={state.tableHead2} flexArr={[1, 2]} style={styles.head} textStyle={styles.text} />
                    <TableWrapper style={styles.wrapper}>
                        <Col data={state.tableTitle} style={styles.title} heightArr={[30,30]} textStyle={styles.text} />
                        <Rows data={state.tableData2} flexArr={[2, 1, 1]} style={styles.row} textStyle={styles.text2} />
                    </TableWrapper>
                    </Table>   
                  )}
                  </View>

                  <View>
                  <TouchableOpacity onPress={() => setHistoryExpandedExpanded(!historyExpanded)}>
                    <Text style={styles.card}>
                      <Text style={styles.message}>{historyExpanded  ? 'Historia' : 'Historia' }</Text>
                    </Text>
                  </TouchableOpacity>
                  {historyExpanded && (
                    <Table>
                      <Row data={state.tableHead3} flexArr={[1, 2]} style={styles.head} textStyle={styles.text} />
                      <TableWrapper style={styles.wrapper}>
                          <Col data={state.tableTitle3} style={styles.title} heightArr={[30,30]} textStyle={styles.text} />
                          <Rows data={state.tableData} flexArr={[2, 1, 1]} style={styles.row} textStyle={styles.text2} />
                      </TableWrapper>
                    </Table>   
                  )}
                  </View>

                  <View>
                  <TouchableOpacity onPress={() => setArtExpanded(!artExpanded)}>
                    <Text style={styles.card}>
                      <Text style={styles.message}>{artExpanded  ? 'Artes' : 'Artes' }</Text>
                    </Text>
                  </TouchableOpacity>
                  {artExpanded && (
                    <Table>
                      <Row data={state.tableHead4} flexArr={[1, 2]} style={styles.head} textStyle={styles.text} />
                      <TableWrapper style={styles.wrapper}>
                          <Col data={state.tableTitle4} style={styles.title} heightArr={[30,30]} textStyle={styles.text} />
                          <Rows data={state.tableData} flexArr={[2, 1, 1]} style={styles.row} textStyle={styles.text2} />
                      </TableWrapper>
                    </Table>   
                  )}
                  </View>

                  <View>
                  <TouchableOpacity onPress={() => setPhysical_educationExpanded(!physical_educationExpanded)}>
                    <Text style={styles.card}>
                      <Text style={styles.message}>{physical_educationExpanded  ? 'Educação Fisica' : 'Educação Fisica' }</Text>
                    </Text>
                  </TouchableOpacity>
                  {physical_educationExpanded && (
                    <Table>
                      <Row data={state.tableHead5} flexArr={[1, 2]} style={styles.head} textStyle={styles.text} />
                      <TableWrapper style={styles.wrapper}>
                          <Col data={state.tableTitle5} style={styles.title} heightArr={[30,30]} textStyle={styles.text} />
                          <Rows data={state.tableData} flexArr={[2, 1, 1]} style={styles.row} textStyle={styles.text2} />
                      </TableWrapper>
                    </Table>   
                    
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
    },
    head:{
        height: 35, 
        backgroundColor: '#dfeaf5',
        borderRadius: 10,
    },
    text: { 
        margin: 6, 
        textAlign: 'center' 
    },
    wrapper: { 
        flexDirection: 'row' 
    },
    row: { 
        height: 28 
    },
    text2: { 
        paddingBottom: 10
    }
})