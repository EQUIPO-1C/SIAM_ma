import { View, Text,Image, StyleSheet,useWindowDimensions } from 'react-native'
import React, {useState} from 'react'
import Logo from './../../../assets/images/plaza_che2.jpeg'
import CustomInput  from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import CustomTitle from '../../components/CustomTitle'
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import BasicDataScreen from '../BasicDataScreen'
import { AsyncStorage } from 'react-native';

_storeData = async (value) => {
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


const SignInScreen = () => {
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    
    const {height} = useWindowDimensions
    const navigation = useNavigation();

    
    const onSignInPressed = ()=>{
        //console.warn('Ha ingresado a la APP SIAM')
        _storeData(username)
        bar=username
        navigation.navigate('Perfil',{username})
        
        
    }

    
  return (
    <View style={styles.root}>
        <StatusBar
      backgroundColor="#a81933"
      barStyle="light-content"
      />
        <CustomTitle/>
      <Image 
      source={Logo} 
      style={styles.logo} 
      resizeMode="contain"
      />
      <CustomInput 
      placeholder="Nombre de usuario" 
      value ={username}
       setValue={setUsername}
       onChangeText={newUsername => setUsername(newUsername)}
       />
      <CustomInput 
      placeholder="Contraseña" 
      value ={password}
        setValue={setPassword}
        secureTextEntry={true}
        onChangeText={newPassword => setUsername(newPassword)}
       
       />
       <CustomButton text="Ingresar" onPress={onSignInPressed}/>
      
       
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

export default SignInScreen