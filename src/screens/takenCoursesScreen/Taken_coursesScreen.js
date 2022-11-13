import React from 'react'
import { ASIGNATURA_QUERY } from '../../gql/QueryAsignaturas'
import { useQuery } from '@apollo/client'
import {View,Text,StyleSheet,ScrollView} from 'react-native'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import { ALL_ASIGNATURA_INSCRITAS_QUERY } from '../../gql/QueryAllAsignaturas';
import { ALL_CALIFICACIONES_QUERY } from '../../gql/QueryAllCalificaciones';
import { ASIGNATURA_ByID_QUERY } from '../../gql/QueryAsignaturasInscritasByID';
import { AsyncStorage } from 'react-native';
let codigoEstudiante=''
let dataAsignaturaByID
let dataCalificaciones
const _retrieveData = async (key2) => {
  
  try {
    const value = await AsyncStorage.getItem(key2)
    console.log(value)
    codigoEstudiante=value
    return value
  } catch (e) {
    console.log(e)
  }
 
}  
export default function Taken_coursesScreen(props) {


  function Calificaciones() {
    const{data,loading}= useQuery(ALL_CALIFICACIONES_QUERY)
    dataCalificaciones=data
    console.log('Calificaciones')
    console.log(dataCalificaciones)
    
  }

  function AsignaturaBYID(id) {
    const { loading, data } = useQuery(ASIGNATURA_ByID_QUERY, {
      variables: {id:id},
      
    });  
    dataAsignaturaByID=data
    console.log('Asignaturas por ID')
    console.log(dataAsignaturaByID)
    
  }
//const{data,loading}= useQuery(ALL_CALIFICACIONES_QUERY)
//const { loading, data } = useQuery(ASIGNATURA_ByID_QUERY, {variables: { id:3 },});


Calificaciones()
AsignaturaBYID(3)

  
  //console.log("Aqui me deberia mostrar el data")
  //console.log(dataAsignaturaByID)
  //console.log(data2)
  //console.log(codigoEstudiante)
  //iD_Calificacion
  //codigo_Asignatura
  //iD_Estudiante
  //definitiva_Calificacion
  //calificaciones_Calificacion
  //porcentajes_Calificaciones
  //const DATA = dataCalificaciones.allcalifacionesin
  console.log("Aqui me deberia mostrar el data")
  console.log(dataCalificaciones.allcalifacionesin)

  
//const DATA2 =dataAsignaturaByID.asignaturainscritasById.nombre_Asignatura
  return (
    
    <ScrollView style={styles.container}>
      <Text style={{fontSize:30, fontWeight:'bold'}}>Asignaturas inscritas</Text>
    { dataCalificaciones.allcalifacionesin.map((data) => {
      AsignaturaBYID(3)
      
      //if (data.iD_Calificacion==5){
      return (
        
        <Card style={styles.item}>
          <CardImage 
      source={{uri: 'https://bogota.unal.edu.co/web/html/imagenes/QsqV5UA4_400x400.jpg'}}
      style={{width: '100%', height: '100%'}}
       
      
    />
          <CardTitle 
          title={dataAsignaturaByID.asignaturainscritasById.nombre_Asignatura}
          subtitle={data.codigo_Asignatura}
          
          />
         
         <Text style={styles.item}>Nota: {data.definitiva_Calificacion}</Text>
        </Card>
      );
      //}
     // else{return(<Text></Text>)}
    //Aqui
      }
    
    //AQUI
    )}


  </ScrollView>

  )


  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    borderRadius:10,
    
    
  },
  item: {
    padding: 20,
    fontSize: 15,
    marginTop: 5,
    borderRadius:10,
    
  },
  
});