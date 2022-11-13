
import { DataNavigation } from 'react-data-navigation';

import { ImageBackground,View, Text,Image, StyleSheet,useWindowDimensions,Pressable,ScrollView } from 'react-native'
import React, {useState} from 'react'
import CustomButton from '../../components/CustomButton'
import { StatusBar } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'
import SignInScreen from '../SignInScreen';

import { BasicData_QUERY } from '../../gql/QueryBasicData'
import { useQuery } from '@apollo/client'
import { AsyncStorage } from 'react-native';


let variable=''

const _retrieveData = async (key) => {
  
  try {
    const value = await AsyncStorage.getItem(key)
    console.log(typeof value)
    variable=value
    return value
  } catch (e) {
    console.log(e)
  }
 
}

_storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(
      '@Identification',
      value
    );


  } catch (error) {
    console.log(error)
  }
};
export default function BasicDataScreen() {
  




  //const route = useRoute();
  //JSON.stringify(value)
  //console.log('whyyy')
  _retrieveData('@key')

  //let username=route.params.username
  const image = { uri: "https://bogota.unal.edu.co/web/html/imagenes/QsqV5UA4_400x400.jpg" };
  const usuario = 'bdleons'
  //const{dataAuth,loadingAuth}= useQuery(BasicData_QUERY,{variables: {username:variable},})
  const{data,loading}= useQuery(BasicData_QUERY,{variables: {username:variable},})
  
  if (loading) {
      return <Text>Fetching data...</Text> //while loading return this
    }
    //console.log("***********")
    //console.log(data.getAllUserInfo)
    
    
    


const DATA = data.getAllUserInfo
_storeData(DATA.identificationNumber)


  return (
    
    <View style={styles.container}>
    
    
      <View style={styles.content}>
      
        <ScrollView showsVerticalScrollIndicator={false}>
        
          <Text style={{fontSize:20, fontWeight:'bold'}}>Datos Básicos</Text>
          <View style={styles.profileText}>
            <Text style={styles.profileTitle}>Nombre</Text>
            <Text style={{alignSelf:'flex-end'}}>{DATA.name}</Text>
          </View>
          <View style={[styles.profileText, {flexDirection:'row', justifyContent:'space-between'}]}>
            <Text style={styles.profileTitle}>Apellido</Text>
            <Text style={{alignSelf:'flex-end'}}>{DATA.surname}</Text>
          </View>
          <View style={[styles.profileText, {flexDirection:'row', justifyContent:'space-between'}]}>
            <Text style={styles.profileTitle}>Rol</Text>
            <Text style={{alignSelf:'flex-end'}}>{DATA.role}</Text>
          </View>
          <View style={[styles.profileText, {flexDirection:'row', justifyContent:'space-between'}]}>
            <Text style={styles.profileTitle}>Fecha de nacimiento</Text>
            <Text style={{alignSelf:'flex-end'}}>{DATA.birthDate}</Text>
          </View>
          <View style={[styles.profileText, {flexDirection:'row', justifyContent:'space-between'}]}>
            <Text style={styles.profileTitle}>Dirección</Text>
            <Text style={{alignSelf:'flex-end'}}>{DATA.address}</Text>
          </View>
          <View style={[styles.profileText, {flexDirection:'row', justifyContent:'space-between'}]}>
            <Text style={styles.profileTitle}>Ciudad</Text>
            <Text style={{alignSelf:'flex-end'}}>{DATA.city}</Text>
          </View>
          <View style={[styles.profileText, {flexDirection:'row', justifyContent:'space-between'}]}>
            <Text style={styles.profileTitle}>Nivel</Text>
            <Text style={{alignSelf:'flex-end'}}>{DATA.level}</Text>
          </View>
          <View style={[styles.profileText, {flexDirection:'row', justifyContent:'space-between'}]}>
            <Text style={styles.profileTitle}>Tipo de sangre</Text>
            <Text style={{alignSelf:'flex-end'}}>{DATA.bloodType}</Text>
          </View>
          <View style={[styles.profileText, {flexDirection:'row', justifyContent:'space-between'}]}>
            <Text style={styles.profileTitle}>Situación militar</Text>
            <Text style={{alignSelf:'flex-end'}}>{DATA.militarySituation}</Text>
          </View>
          
         </ScrollView>
         
      </View>  
      
    </View>
    
    
    
  )




}

const styles = StyleSheet.create({
    container:{
      
      height:'100%',
       
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












/*

async function logInit(username, password) {
  const response = await client.mutate({
    mutation: LOGIN_MUTATION,
    variables: {
      siamLogin: {
        username: username,
        password: password
      }
    }
  }).then(
    (result) => console.log(result)
  ).catch(function (error) {
    console.log('There has been a problem with your fetch operation: ' + error.message);
  });
}


const BasicDataScreen = () => {
  
  const navigation = useNavigation();
  const[password, setPassword] = useState('');
  
  const {height} = useWindowDimensions
  const onSignInPressed = ()=>{
      //console.warn('Ha ingresado a la APP SIAM')
      
      navigation.navigate('BasicData')
  }
return (
  <View 
  style={styles.root}>
  
    <StatusBar
      backgroundColor="#a81933"
      barStyle="light-content"
    />
  
   <CustomButton
      text="Ingresar" onPress={logInit("bdleons", "swarchbdleons")}
    />
    
    
  </View>
)
}

const styles = StyleSheet.create({
  root:{
      alignItems: 'center',
      padding:10,
  },
logo: {
      width: '115%',
      height: '40%',
      marginVertical: 25,

},

})

export default BasicDataScreen
*/
