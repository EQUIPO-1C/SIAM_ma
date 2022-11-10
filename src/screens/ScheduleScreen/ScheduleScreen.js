import { View, Text,Image, StyleSheet,useWindowDimensions } from 'react-native'
import React, {useState} from 'react'
import CustomButton from '../../components/CustomButton'
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native'


const ScheduleScreen = () => {
  
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
      text="Ingresar" onPress={onSignInPressed}
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

export default ScheduleScreen
