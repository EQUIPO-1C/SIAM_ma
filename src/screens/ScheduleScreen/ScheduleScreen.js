import { View, Text,Image, StyleSheet,useWindowDimensions } from 'react-native'
import React, {useState} from 'react'
import CustomButton from '../../components/CustomButton'
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import WeekView, { createFixedWeekDate } from 'react-native-week-view';
import { useQuery } from '@apollo/client'
import { AsyncStorage } from 'react-native';
import { SCHEDULE_QUERY } from '../../gql/QuerySchedule';

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


const ScheduleScreen = () => {
  console.warn('Ha ingresado al horario')
  _retrieveData('Identification')
  console.log('Variable identificacion')
  console.log(variable)
  const{data,loading,error}= useQuery(SCHEDULE_QUERY,{variables: {id:12345678},})
  
  if (loading) return <Text>'Loading...';</Text>
  if (error) return <Text>`Error! ${error.message}`;</Text>

//console.log("Sqlida del horario")
const DATA = data.horarioByID
//===========================================
//Test to try on monday schedule and it helps for the others days
/*
console.log(DATA.data[0].lunes[0])
console.log(DATA.data[0].lunes[0].materia)
console.log(DATA.data[0].lunes[0].horas)
console.log(DATA.data[0].lunes[1].materia)
console.log(DATA.data[0].lunes[1].horas)
console.log(DATA.data[0].lunes[2].materia)
console.log(DATA.data[0].lunes[2].horas)
console.log((DATA.data[0].lunes).length)
console.log(typeof DATA)
console.log(typeof DATA.data[0].lunes[0])
console.log("-------------------------")
*/
//===========================================
//Objeto de prueba para leer el data
/*
const myObject = DATA.data[0].lunes[0]
arrayLunes = Object.values(myObject)

for (var key in myObject) {
  
  if (myObject.hasOwnProperty(key)) {
    
    console.log(myObject[key])
  }
}
console.log("-------------------------")
console.log(arrayLunes[2])
console.log(arrayLunes[4])
console.log("**************************")
*/
//===========================================
const myObject2 = DATA.data[0].lunes
const myObject3 = DATA.data[0].martes
const myObject4 = DATA.data[0].miercoles
const myObject5 = DATA.data[0].jueves
const myObject6 = DATA.data[0].viernes
const myObject7 = DATA.data[0].sabado
const myObject8 = DATA.data[0].domingo

//console.log(myObject2.length)
//arrayLunes2 = Object.values(myObject2)
//console.log(arrayLunes2)
const HorarioLunes=["Lunes"]
const HorarioMartes=["Martes"]
const HorarioMiercoles=["Miercoles"]
const HorarioJueves=["Jueves"]
const HorarioViernes=["Viernes"]
const HorarioSabado=["Sabado"]
const HorarioDomingo=["Domingo"]
const lH=[]
const pL ={}
////////////////////////////////////////////
///Lunes
for (var key2 in myObject2) {
  
  if (myObject2.hasOwnProperty(key2)) {
    
    //console.log(myObject2[key2].materia)
    //console.log(myObject2[key2].horas)
    HorarioLunes.push(myObject2[key2].materia)
    HorarioLunes.push(myObject2[key2].horas)
    lH.push({
      id: myObject2[key2].codmateria,
      description: myObject2[key2].materia,
      startDate: new Date(2022, 10, 14, 7, 0),
      endDate: new Date(2022, 10, 14, 9, 0),
      color: '#a81933',
      // ... more properties if needed,
    })
  }
}
console.log(HorarioLunes)
////////////////////////////////////////////
///Martes

for (var key3 in myObject3) {
  
  if (myObject3.hasOwnProperty(key3)) {
    
    //console.log(myObject2[key2].materia)
    //console.log(myObject2[key2].horas)
    HorarioMartes.push(myObject3[key3].materia)
    HorarioMartes.push(myObject3[key3].horas)
    lH.push({
      id: myObject3[key3].codmateria,
      description: myObject3[key3].materia,
      startDate: new Date(2022, 10, 15, 7, 0),
      endDate: new Date(2022, 10, 15, 9, 0),
      color: '#a81933',
      // ... more properties if needed,
    })
     
  }
}
////////////////////////////////////////////
///Miercoles

for (var key4 in myObject4) {
  
  if (myObject4.hasOwnProperty(key4)) {
    
    //console.log(myObject2[key2].materia)
    //console.log(myObject2[key2].horas)
    HorarioMiercoles.push(myObject4[key4].materia)
    HorarioMiercoles.push(myObject4[key4].horas)
    lH.push({
      id: myObject4[key4].codmateria,
      description: myObject4[key4].materia,
      startDate: new Date(2022, 10, 16, 7, 0),
      endDate: new Date(2022, 10, 16, 9, 0),
      color: '#a81933',
      // ... more properties if needed,
    })
     
  }
}
////////////////////////////////////////////
///Jueves

for (var key5 in myObject5) {
  
  if (myObject5.hasOwnProperty(key5)) {
    
    //console.log(myObject2[key2].materia)
    //console.log(myObject2[key2].horas)
    HorarioJueves.push(myObject5[key5].materia)
    HorarioJueves.push(myObject5[key5].horas)
    lH.push({
      id: myObject5[key5].codmateria,
      description: myObject5[key5].materia,
      startDate: new Date(2022, 10, 17, 7, 0),
      endDate: new Date(2022, 10, 17, 9, 0),
      color: '#a81933',
      // ... more properties if needed,
    })
     
  }
}
////////////////////////////////////////////
///Viernes

for (var key6 in myObject6) {
  
  if (myObject6.hasOwnProperty(key6)) {
    
    //console.log(myObject2[key2].materia)
    //console.log(myObject2[key2].horas)
    HorarioViernes.push(myObject6[key6].materia)
    HorarioViernes.push(myObject6[key6].horas)
    lH.push({
      id: myObject6[key6].codmateria,
      description: myObject6[key6].materia,
      startDate: new Date(2022, 10, 18, 7, 0),
      endDate: new Date(2022, 10, 18, 9, 0),
      color: '#a81933',
      // ... more properties if needed,
    })
     
  }
}
////////////////////////////////////////////
///Sábado

for (var key7 in myObject7) {
  
  if (myObject7.hasOwnProperty(key7)) {
    
    //console.log(myObject2[key2].materia)
    //console.log(myObject2[key2].horas)
    HorarioSabado.push(myObject7[key7].materia)
    HorarioSabado.push(myObject7[key7].horas)
    lH.push({
      id: myObject7[key7].codmateria,
      description: myObject7[key7].materia,
      startDate: new Date(2022, 10, 18, 7, 0),
      endDate: new Date(2022, 10, 18, 9, 0),
      color: '#a81933',
      // ... more properties if needed,
    })
     
  }
}
////////////////////////////////////////////
///Domingo

for (var key8 in myObject8) {
  
  if (myObject8.hasOwnProperty(key8)) {
    
    //console.log(myObject2[key2].materia)
    //console.log(myObject2[key2].horas)
    HorarioDomingo.push(myObject8[key8].materia)
    HorarioDomingo.push(myObject7[key8].horas)
    lH.push({
      id: myObject8[key8].codmateria,
      description: myObject8[key8].materia,
      startDate: new Date(2022, 10, 18, 7, 0),
      endDate: new Date(2022, 10, 18, 9, 0),
      color: '#a81933',
      // ... more properties if needed,
    })
     
  }
}
console.log(HorarioLunes)
console.log(HorarioMartes)
console.log(HorarioMiercoles)
console.log(HorarioJueves)
console.log(HorarioViernes)
console.log(HorarioSabado)
console.log(HorarioDomingo)
console.log(lH)


  const myEvents = [
    {
      id: 54634,
      description: 'Comp. Visual',
      startDate: new Date(2022, 10, 14, 7, 0),
      endDate: new Date(2022, 10, 14, 9, 0),
      color: '#a81933',
      // ... more properties if needed,
    },

    {
      id: 76678,
      description: 'SIDA',
      startDate: new Date(2022, 10, 14, 9, 0),
      endDate: new Date(2022, 10, 14, 11, 0),
      color: '#a81933',
      // ... more properties if needed,
    },
    {
      id: 4566,
      description: 'Sistemas de informacion',
      startDate: new Date(2022, 10, 14, 11, 0),
      endDate: new Date(2022, 10, 14, 13, 0),
      color: '#a81933',
      // ... more properties if needed,
    },

    {
      id: 12345,
      description: 'POO',
      startDate: new Date(2022, 10, 15, 9, 0),
      endDate: new Date(2022, 10, 15, 11, 0),
      color: '#a81933',
      // ... more properties if needed,
    },
    {
      id: 32145,
      description: 'Bases de datos',
      startDate: new Date(2022, 10, 15, 11, 0),
      endDate: new Date(2022, 10, 15, 13, 0),
      color: '#a81933',
      // ... more properties if needed,
    },
    {
      id: 54634,
      description: 'Comp. Visual',
      startDate: new Date(2022, 10, 16, 7, 0),
      endDate: new Date(2022, 10, 16, 9, 0),
      color: '#a81933',
      // ... more properties if needed,
    },

    {
      id: 76678,
      description: 'SIDA',
      startDate: new Date(2022, 10, 16, 9, 0),
      endDate: new Date(2022, 10, 16, 11, 0),
      color: '#a81933',
      // ... more properties if needed,
    },
    {
      id: 4566,
      description: 'Sistemas de informacion',
      startDate: new Date(2022, 10, 16, 11, 0),
      endDate: new Date(2022, 10, 16, 13, 0),
      color: '#a81933',
      // ... more properties if needed,
    },
    {
      id: 12345,
      description: 'POO',
      startDate: new Date(2022, 10, 17, 9, 0),
      endDate: new Date(2022, 10, 17, 11, 0),
      color: '#a81933',
      // ... more properties if needed,
    },
    {
      id: 32145,
      description: 'Bases de datos',
      startDate: new Date(2022, 10, 17, 11, 0),
      endDate: new Date(2022, 10, 17, 13, 0),
      color: '#a81933',
      // ... more properties if needed,
    },
    // More events...
  ];

return (
  
  
    <WeekView
    events={lH}
    selectedDate={new Date(2022, 11, 15)}
    numberOfDays={7}
    //timeStep={30}
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
