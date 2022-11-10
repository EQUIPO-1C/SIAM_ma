import React from 'react'
import { ASIGNATURA_QUERY } from '../../gql/QueryAsignaturas'
import { useQuery } from '@apollo/client'
import {View,Text,StyleSheet,ScrollView} from 'react-native'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';


export default function Taken_coursesScreen(props) {

const{data,loading}= useQuery(ASIGNATURA_QUERY)

if (loading) {
    return <Text>Fetching data...</Text> //while loading return this
  }
  console.log("***********")
  console.log(data)

const DATA = data.allAsignaturas
  return (
    
    <ScrollView style={styles.container}>
      <Text style={{fontSize:30, fontWeight:'bold'}}>Asignaturas inscritas</Text>
    {data.allAsignaturas.map((data) => {
      return (
        
        <Card style={styles.item}>
          <CardImage 
      source={{uri: 'https://bogota.unal.edu.co/web/html/imagenes/QsqV5UA4_400x400.jpg'}}
      style={{width: '100%', height: '100%'}}
       
      
    />
          <CardTitle 
          title={data.nombreAsignatura}
          subtitle={data.codigoasignatura}
          
          />
          <Text style={styles.item}>Nota: Sin definitiva</Text>
          
        </Card>
      );
    })}
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