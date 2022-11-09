import React from 'react'
import { ASIGNATURA_QUERY } from '../../gql/QueryAsignaturas'
import { useQuery } from '@apollo/client'
import {View,Text,StyleSheet,ScrollView} from 'react-native'

export default function ScheduleScreen(props) {

const{data,loading}= useQuery(ASIGNATURA_QUERY)

if (loading) {
    return <Text>Fetching data...</Text> //while loading return this
  }
  console.log("***********")
  console.log(data)

const DATA = data.allAsignaturas[1]
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={{fontSize:20, fontWeight:'bold'}}>Asignaturas inscritas</Text>
          <View style={styles.profileText}>
            <Text style={styles.profileTitle}>Nombre de asignatura</Text>
            <Text style={{alignSelf:'flex-end'}}>{DATA.nombreAsignatura}</Text>
          </View>
          <View style={[styles.profileText, {flexDirection:'row', justifyContent:'space-between'}]}>
            <Text style={styles.profileTitle}>Código</Text>
            <Text style={{alignSelf:'flex-end'}}>{DATA.codigoasignatura}</Text>
          </View>
         </ScrollView>
      </View>  
    </View>
  )




}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#b7b7bd',
    height:'100%'
  },
  text:{
    fontSize:15,
    color:'#5DA7DB',
    fontWeight:'bold'
  },
  content:{
    backgroundColor:'#F2F2F2',
    borderRadius:30,
    marginVertical:25,
    padding:10,
    marginHorizontal:10,
    height:'80%'
  },
  title:{
    flexDirection:'row',
    justifyContent: 'space-around',
    paddingBottom:10,
    alignContent:'center'
  },
  profileText:{
    color:'aaa',
    paddingVertical:5,
    paddingHorizontal:10,
    borderBottomWidth:1,
    borderBottomColor:'#009B86',
    borderRadius:10,
    marginHorizontal:5,
    justifyContent:'flex-end',
    marginVertical:10
  },
  dataView:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginVertical:5
  },
  profileTitle:{
    color:'#161019', 
    fontWeight:'bold',
    fontSize:15
  }
})
