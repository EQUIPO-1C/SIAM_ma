
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import Taken_coursesScreen from '../screens/takenCoursesScreen'
import ScheduleScreen from '../screens/ScheduleScreen';
import BasicDataScreen from '../screens/BasicDataScreen';

const Stack = createNativeStackNavigator();
const Navigation = () => {
    
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name ="SignIn" component={SignInScreen}/>
        <Stack.Screen name ="TakenCourses" component={Taken_coursesScreen}/>
        <Stack.Screen name ="Schedule" component={ScheduleScreen}/>
        <Stack.Screen name ="BasicData" component={BasicDataScreen}/>
        
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation