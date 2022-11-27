import React, { useState } from 'react'
import { ASIGNATURA_QUERY } from '../../gql/QueryAsignaturas'
import { useQuery } from '@apollo/client'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import { ALL_ASIGNATURA_INSCRITAS_QUERY } from '../../gql/QueryAllAsignaturas';
import { ALL_CALIFICACIONES_QUERY } from '../../gql/QueryAllCalificaciones';
import { ASIGNATURA_ByID_QUERY } from '../../gql/QueryAsignaturasInscritasByID';
import { AsyncStorage } from 'react-native';
import { ALL_CALIFICACIONES_QUERY_COMPLETE } from '../../gql/QueryAllCalificaciones'
import { SCHEDULE_QUERY } from '../../gql/QuerySchedule';
let codigoEstudiante = ''
let dataAsignaturaByID2 = []
let variableId = ''

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

const Taken_coursesScreen = () => {
  
  const [datoIdentificacion, setDatoIdentificacion] = useState("");

  const getData = async (key) => {

    return await AsyncStorage.getItem(key).then((response) => {
      variableId = response
      return response
    });
  }

  const jsonData = getData('@Identification').then(
    (decoded) => {
      setDatoIdentificacion(decoded);
    }
  )

  if (datoIdentificacion == undefined) {
    return <Text>Cargando....</Text>
  }
  console.log("----------------------------------**********")
  variable = parseInt(variableId)
  console.log(variableId)
  console.log("----------------------------------**********")



  const { data, loading, error } = useQuery(ALL_CALIFICACIONES_QUERY_COMPLETE, { variables: { iD: variable }, })

  if (loading) return <Text>'Loading...';</Text>
  if (error) return <Text>`Error! ${error.message}`;</Text>

  //console.log("Sqlida del horario")
  

  //console.log("Sqlida del horario")
  //console.log(data.calificacionesinByIDEst)
  //dataCalificaciones = data.calificacionesinByIDEst
  console.log("Nombres")
  const DATA = data.calificacionesinByIDEst
  console.log(data.calificacionesinByIDEst)








  //Hasta aqui



  return (


    <ScrollView style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 20 }}>Asignaturas inscritas:{DATA[0].iD_Estudiante}</Text>
      
      {
        DATA.map((counter) => {


          // _AsignaturaBYID(counter.codigo_Asignatura)
          //dataAsignaturaByID.asignaturainscritasById.nombre_Asignatura 
          //title={counter.nombreAsignaturaIngreso}
          //subtitle={counter.codigo_Asignatura}
          //<Text style={styles.item}>Nota: {counter.definitiva_Calificacion}</Text>
          //<Text style={styles.item}>Codigo estudiante: {counter.iD_Estudiante}</Text>

          //if (counter.iD_Estudiante= variableId)


          return (
            <Card style={styles.item}>
              <CardImage
                source={{ uri: 'https://bogota.unal.edu.co/web/html/imagenes/QsqV5UA4_400x400.jpg' }}
                style={{ width: '100%', height: '100%' }}
              />
              <CardTitle
                title={counter.nombre_Asignatura}
                
                

              />
              <Text style={styles.item}>Código de la asignatura: {counter.codigo_Asignatura}</Text>
              <Text style={styles.item}>Grupo: {counter.numero_Grupo_Asignatura}</Text>
              <Text style={styles.item}>Nota: {counter.definitiva_Calificacion}</Text>
              <Text style={styles.item}>Codigo estudiante: {counter.iD_Estudiante}</Text>
              <Text style={styles.item}>Créditos: {counter.creditos_Asignatura}</Text>
              <Text style={styles.item}>Porcentajes: {counter.porcentajes_Calificaciones}</Text>
    
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
    padding: 5,
    fontSize: 15,
    marginTop: 5,
    borderRadius: 10,
    fontSize: 18,
    

  },

});

export default Taken_coursesScreen