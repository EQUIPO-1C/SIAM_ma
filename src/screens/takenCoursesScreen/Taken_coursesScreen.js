import React, { useState } from 'react'
import { ASIGNATURA_QUERY } from '../../gql/QueryAsignaturas'
import { useQuery } from '@apollo/client'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import { ALL_ASIGNATURA_INSCRITAS_QUERY } from '../../gql/QueryAllAsignaturas';
import { ALL_CALIFICACIONES_QUERY } from '../../gql/QueryAllCalificaciones';
import { ASIGNATURA_ByID_QUERY } from '../../gql/QueryAsignaturasInscritasByID';
import { AsyncStorage } from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton.js'
import { SCHEDULE_QUERY } from '../../gql/QuerySchedule';

let codigoEstudiante = ''
let dataAsignaturaByID
let dataAsignaturaByID2=[]
let dataCalificaciones
let variableId = ''
const b = []
let a = 0;

_storeData = async (value, codigo) => {
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
    codigoEstudiante = value
    return value
  } catch (e) {
    console.log(e)
  }

}




const _AsignaturaBYID=(id)=> {
try{
  const { loading, data, error } = useQuery(ASIGNATURA_ByID_QUERY, {
    variables: { id: id },

  });
  
  if (loading) return console.log("loading")
  if (error) return console.log(`Error! ${error.message}`)

  dataAsignaturaByID = data
  return dataAsignaturaByID

}

catch(error){
  console.log("No entro porque no se meda la sapa perra gana hp ")
  console.log(error)}
  
}




const   Taken_coursesScreen = ()=>{
  const [datoIdentificacion, setDatoIdentificacion] = useState("");
  const getData = async (key) => {
    
    return await  AsyncStorage.getItem(key).then((response) => {
      variableId = response
       return response});
  }
  
  const jsonData = getData('@Identification').then(
    (decoded) => {
      setDatoIdentificacion(decoded);
    }
  ) 

   if (datoIdentificacion == undefined){
    return <Text>Cargando....</Text>
  }
console.log("----------------------------------**********")
variableId = parseInt(variableId)
console.log(variableId)
console.log("----------------------------------**********")
  

  console.log('preuba100')
  //_AsignaturaBYID(3)

  const { data:data, loading:loading, error:error } = useQuery(ALL_CALIFICACIONES_QUERY)
  if (loading) return <Text>'Loading...';</Text>
  if (error) return <Text>`Error! ${error.message}`;</Text>
  dataCalificaciones = data.allcalifacionesin

 

//Desde aquí



  console.log('Antesss de entrar a califaciones')
  console.log(dataCalificaciones)
  console.log('Después de entrar a califaciones')
  let arrayCodigos = []
  let arrayNombres = []
  let dataCalificaciones_Copy=[] ;
  const dataCalificaciones_Copy2 = []


  dataCalificaciones.map((key) => {
    //console.log(data.asignaturainscritasById.nombre_Asignatura )
    console.log(key.codigo_Asignatura)
    console.log(key.definitiva_Calificacion)
    console.log(key.iD_Estudiante)
    arrayCodigos.push(key.codigo_Asignatura)

  }

  )
  console.log(arrayCodigos)
  
  //let newTransaction=[];
  
  for (var a = 0; a <= arrayCodigos.length; a++) {
    var i = 1
    console.log("BEforeTmp")

    const dataAsignaturaByIDTmp = async function (x) {
    dataAsignaturaByID = await _AsignaturaBYID(arrayCodigos[x])
    //dataAsignaturaByID.then((response) => {
     // variableId = response
       //return response});
       return dataAsignaturaByID
    
    }

  console.log("dataAsignaturaByIDTmp")
  
  console.log(dataAsignaturaByIDTmp(a))

    
    //console.log(dataCalificaciones[a])
   // console.log(dataAsignaturaByID.asignaturainscritasById.nombre_Asignatura )

    //arrayNombres.push(dataAsignaturaByID2.asignaturainscritasById.nombre_Asignatura)
    
    //console.log(dataAsignaturaByID.asignaturainscritasById.nombre_Asignatura)
    //console.log(typeof dataCalificaciones)
    //dataCalificaciones_Copy[0]['Nombre']=    dataAsignaturaByID.asignaturainscritasById.nombre_Asignatura
   // dataCalificaciones_Copy[1]['Nombre']=    "Otro"
   //(dataCalificaciones[a])['Nombre'][dataAsignaturaByID.asignaturainscritasById.nombre_Asignatura]

   
   dataCalificaciones_Copy2.push(dataCalificaciones[a])
   const newTransactionFunction = async function (a) {
    const newTransaction=await Object.assign({}, dataCalificaciones[a], {nombreAsignaturaIngreso: (    dataAsignaturaByIDTmp.asignaturainscritasById.nombre_Asignatura) })
    return newTransaction
   }
  dataCalificaciones_Copy.push(newTransactionFunction())
  console.log( dataCalificaciones_Copy)
  i++
  
  
   }
  
   
  console.log(arrayNombres)
  console.log( dataCalificaciones_Copy)
  
  

  
 //Hasta aqui



  return (


    <ScrollView style={styles.container}>
      <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Asignaturas inscritas</Text>
      {
        dataCalificaciones.map((counter) => {


          // _AsignaturaBYID(counter.codigo_Asignatura)
          //dataAsignaturaByID.asignaturainscritasById.nombre_Asignatura 
          //title={counter.nombreAsignaturaIngreso}
          //subtitle={counter.codigo_Asignatura}
          //<Text style={styles.item}>Nota: {counter.definitiva_Calificacion}</Text>
          //<Text style={styles.item}>Codigo estudiante: {counter.iD_Estudiante}</Text>

          if (counter.iD_Estudiante= variableId)
            
            
          return (
            <Card style={styles.item}>
              <CardImage
                source={{ uri: 'https://bogota.unal.edu.co/web/html/imagenes/QsqV5UA4_400x400.jpg' }}
                style={{ width: '100%', height: '100%' }}
              />
              <CardTitle
                title={"counter.nombreAsignaturaIngreso"}
                subtitle={counter.codigo_Asignatura}
              />
              <Text style={styles.item}>Nota: {counter.definitiva_Calificacion}</Text>
              <Text style={styles.item}>Codigo estudiante: {counter.iD_Estudiante}</Text>
            </Card>
       );
        
        }
        
        

        )}
      

    </ScrollView>


  )



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    borderRadius: 10,

  },
  item: {
    padding: 20,
    fontSize: 15,
    marginTop: 5,
    borderRadius: 10,

  },

});

export default Taken_coursesScreen