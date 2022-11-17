import React from 'react'
import { ASIGNATURA_QUERY } from '../../gql/QueryAsignaturas'
import { useQuery } from '@apollo/client'
import {View,Text,StyleSheet,ScrollView} from 'react-native'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import { ALL_ASIGNATURA_INSCRITAS_QUERY } from '../../gql/QueryAllAsignaturas';
import { ALL_CALIFICACIONES_QUERY } from '../../gql/QueryAllCalificaciones';
import { ASIGNATURA_ByID_QUERY } from '../../gql/QueryAsignaturasInscritasByID';
import { AsyncStorage } from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton.js'
let codigoEstudiante=''
let dataAsignaturaByID
let dataCalificaciones
const b = []
let a =0;

_storeData = async (value,codigo) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(
      '@key',
      value
    );


  } catch (error) {
    console.log(error)
  }
};

 _retrieveData = async (key2) => {
  
  try {
    const value = await AsyncStorage.getItem(key2)
    console.log(value)
    codigoEstudiante=value
    return value
  } catch (e) {
    console.log(e)
  }
 
}  



async function Calificaciones() {
  _retrieveData('@Identification')

  const{data,loading,error}= await useQuery(ALL_CALIFICACIONES_QUERY)
  if (loading) return <Text>'Loading...';</Text>
  if (error) return <Text>`Error! ${error.message}`;</Text>
  dataCalificaciones=data
  dataCalificaciones=dataCalificaciones.allcalifacionesin
  console.log('Calificaciones')
  console.log(dataCalificaciones)
  
}




 

export default function Taken_coursesScreen(props) {
  console.log('Codigo')
  console.log(codigoEstudiante)
  _AsignaturaBYID= (id) => {
    console.log('Entrooo')
    const { loading, data,error } =  useQuery(ASIGNATURA_ByID_QUERY, {
     variables: {id:id},
     
   });  
   console.log('Salgo')
   if (loading) return <Text>'Loading...';</Text>
   if (error) return <Text>`Error! ${error.message}`;</Text>
   
   dataAsignaturaByID=data
   return dataAsignaturaByID
   console.log('Asignaturas por ID')
   console.log(dataAsignaturaByID)
   
 }
 console.log('preuba100')
  _AsignaturaBYID(3)

const{data,loading,error}= useQuery(ALL_CALIFICACIONES_QUERY)
if (loading) return <Text>'Loading...';</Text>
if (error) return <Text>`Error! ${error.message}`;</Text>
dataCalificaciones=data.allcalifacionesin


console.log('Antes de entrar a califaciones')
console.log('Después de entrar a califaciones')

  return (
    
    
    <ScrollView style={styles.container}>
      <Text style={{fontSize:30, fontWeight:'bold'}}>Asignaturas inscritas</Text>
    { 
    dataCalificaciones.map((counter) => {
      
      _AsignaturaBYID(counter.codigo_Asignatura)
      //dataAsignaturaByID.asignaturainscritasById.nombre_Asignatura 

    if (counter.iD_Estudiante=12345678)
    /*console.log(dataAsignaturaByID)
    console.log(typeof counter.codigo_Asignatura)
    b.push(data.asignaturainscritasById.nombre_Asignatura)
    console.log('Soy b')
    console.log(b)
    console.log(b[a])
    a = a+1
    */
      return (
        
        <Card style={styles.item}>
          <CardImage 
      source={{uri: 'https://bogota.unal.edu.co/web/html/imagenes/QsqV5UA4_400x400.jpg'}}
      style={{width: '100%', height: '100%'}}
       
      
    />
          <CardTitle 
          
          title={dataAsignaturaByID.asignaturainscritasById.nombre_Asignatura }
          subtitle={counter.codigo_Asignatura}
          
          />
         
         <Text style={styles.item}>Nota: {counter.definitiva_Calificacion}</Text>
         <Text style={styles.item}>Codigo estudiante: {counter.iD_Estudiante}</Text>
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