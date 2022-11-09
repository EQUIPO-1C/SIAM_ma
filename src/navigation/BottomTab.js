import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Taken_coursesScreen from '../screens/takenCoursesScreen/Taken_coursesScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import BasicDataScreen from '../screens/BasicDataScreen';
import SignInScreen from '../screens/SignInScreen';

import Icon from 'react-native-vector-icons/Entypo';


import React from 'react'
const Tab = createBottomTabNavigator();


const screenOptions = (route, color) => {
    let iconName;
  
    switch (route.name) {
      case 'BasicData':
        iconName = 'user';
        break;
      case 'Schedule':
        iconName = 'calendar';
        break;
      case 'TakenCourses':
        iconName = 'unread';
        break;
        case 'SignIn':
        iconName = 'log-out';
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
        
        <Tab.Screen name ={'BasicData'} component={BasicDataScreen} />
        <Tab.Screen name ={"TakenCourses"} component={Taken_coursesScreen}/>
        <Tab.Screen name ={"Schedule"} component={ScheduleScreen}/>
        <Tab.Screen name = {"SignIn"} component={SignInScreen} options={{tabBarStyle: { display: "none" }}}/>
</Tab.Navigator>

);

}