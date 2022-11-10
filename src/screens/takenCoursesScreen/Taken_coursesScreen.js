import React from 'react'
import { ASIGNATURA_QUERY } from '../../gql/QueryAsignaturas'
import { useQuery } from '@apollo/client'
import {View,Text,StyleSheet,ScrollView} from 'react-native'


export default function Taken_coursesScreen(props) {

const{data,loading}= useQuery(ASIGNATURA_QUERY)

if (loading) {
    return <Text>Fetching data...</Text> //while loading return this
  }
  console.log("***********")
  console.log(data)

const DATA = data.allAsignaturas
  return (
    <View style={styles.container}>
    {data.allAsignaturas.map((data) => {
      return (
        <View>
          <Text style={styles.item}>{data.codigoasignatura}</Text>
          <Text style={styles.item}>{data.nombreAsignatura}</Text>
        </View>
      );
    })}
  </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  item: {
    padding: 20,
    fontSize: 15,
    marginTop: 5,
  }
});