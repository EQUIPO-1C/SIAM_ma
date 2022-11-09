import { View, Text,Image, StyleSheet,useWindowDimensions } from 'react-native'
import React, {useState} from 'react'
import Logo from './../../../assets/images/plaza_che2.jpeg'
import CustomInput  from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import CustomTitle from '../../components/CustomTitle'
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native'

const SignInScreen = () => {
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    
    const {height} = useWindowDimensions
    const navigation = useNavigation();

    const onSignInPressed = ()=>{
        console.warn('Ha ingresado a la APP SIAM')
        navigation.navigate('BasicData')
        
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
       />
      <CustomInput 
      placeholder="Contraseña" 
      value ={password}
        setValue={setPassword}
        secureTextEntry={true}
       
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