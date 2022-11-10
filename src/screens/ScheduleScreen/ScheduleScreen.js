import { View, Text,Image, StyleSheet,useWindowDimensions } from 'react-native'
import React, {useState} from 'react'
import CustomButton from '../../components/CustomButton'
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import WeekView, { createFixedWeekDate } from 'react-native-week-view';



const ScheduleScreen = () => {
  
  const myEvents = [
    {
      id: 2022456,
      description: 'AS-1',
      startDate: new Date(2022, 11, 15, 15, 0),
      endDate: new Date(2022, 11, 15, 15, 30),
      color: '#a81933',
      // ... more properties if needed,
    },
    // More events...
  ];
  const navigation = useNavigation();
  const[password, setPassword] = useState('');
  
  const {height} = useWindowDimensions
  const onSignInPressed = ()=>{
      //console.warn('Ha ingresado a la APP SIAM')
      
      navigation.navigate('BasicData')
  }
return (
  
  
    <WeekView
    events={myEvents}
    selectedDate={new Date(2022, 11, 15)}
    numberOfDays={7}
    timeStep={30}
  />
  
  
  
    
    
    
 
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
