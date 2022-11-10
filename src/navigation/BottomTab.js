import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Taken_coursesScreen from '../screens/takenCoursesScreen/Taken_coursesScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import BasicDataScreen from '../screens/BasicDataScreen';
import SignInScreen from '../screens/SignInScreen';

import Icon from 'react-native-vector-icons/Entypo';
import { AsyncStorage } from 'react-native';

import React from 'react'
const Tab = createBottomTabNavigator();


const screenOptions = (route, color) => {
    let iconName;
  
    switch (route.name) {
      case 'Salir':
        iconName = 'log-out';
        break;
      case 'Perfil':
        iconName = 'user';
        break;
      case 'Horario':
        iconName = 'calendar';
        break;
      case 'Asignaturas inscritas':
        iconName = 'unread';
        break;
        
      default:
        break;
    }
  
    return <Icon name={iconName} color={color} size={24} />;
  };

export const BottomTab=()=>{
return(
<Tab.Navigator 
    screenOptions={({route}) => ({
        tabBarIcon: ({color}) => screenOptions(route,color),
        headerShown: false
      })} 
      tabBarOptions={{
        activeTintColor: "#000",
        activeBackgroundColor: "#FFF",
        inactiveTintColor: "#FFF",
        inactiveBackgroundColor: "#a81933"
      }}
  >
        
       
        
         <Tab.Screen name ={'Perfil'} component={BasicDataScreen} />
        <Tab.Screen name ={"Asignaturas inscritas"} component={Taken_coursesScreen}/>
        <Tab.Screen name ={"Horario"} component={ScheduleScreen}/>
        <Tab.Screen onPressed={AsyncStorage.multiRemove(['@key'], (err) => {})} 
        name = {"Salir"} component={SignInScreen} options={{tabBarStyle: { display: "none" }}}/>
</Tab.Navigator>

);

}