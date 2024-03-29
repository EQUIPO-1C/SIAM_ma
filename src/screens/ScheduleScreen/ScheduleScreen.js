import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../components/CustomButton'
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import WeekView, { createFixedWeekDate } from 'react-native-week-view';
import { useQuery } from '@apollo/client'
import { AsyncStorage } from 'react-native';
import { SCHEDULE_QUERY } from '../../gql/QuerySchedule';



let variableId = ''
function WrapperComponent() {
  return (
    <View>
      <Modal isVisible={true}>
        <View style={{ flex: 1 }}>
          <Text>I am the modal content!</Text>
        </View>
      </Modal>
    </View>
  );
}
const onSignInPressed = (parameter) => {
  console.warn(parameter)
  return 
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      ></Modal>
}



const ScheduleScreen = ({ route, navigation }) => {
  const [datoIdentificacion, setDatoIdentificacion] = useState("");

  const getData = async (key) => {

    return await AsyncStorage.getItem(key).then((response) => {
      variableId = response
      return response
    });
  }

  const jsonData = getData('@Identification').then(
    (decoded) => {
      setDatoIdentificacion(decoded);
    }
  )

  if (datoIdentificacion == undefined) {
    return <Text>Cargando....</Text>
  }
  console.log("----------------------------------**********")
  variable = parseInt(variableId)
  console.log(typeof variableId)
  console.log("----------------------------------**********")



  const { data, loading, error } = useQuery(SCHEDULE_QUERY, { variables: { id: variable }, })

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
  const HorarioLunes = ["Lunes"]
  const HorarioMartes = ["Martes"]
  const HorarioMiercoles = ["Miercoles"]
  const HorarioJueves = ["Jueves"]
  const HorarioViernes = ["Viernes"]
  const HorarioSabado = ["Sabado"]
  const HorarioDomingo = ["Domingo"]
  const lH = []
  const pL = {}
  ////////////////////////////////////////////
  ///Lunes
  var horarioInicioMateria = 0
  var horarioSalidaMateria = 0
  var fechaInicio = 0
  var fechaFinal = 0
  var counter = 0
  for (var key2 in myObject2) {

    if (myObject2.hasOwnProperty(key2)) {
      //Select hour
      switch (myObject2[key2].horas) {
        case '7:00am - 9:00am':
          horarioInicioMateria = 7
          horarioSalidaMateria = 9
          break;
        case '9:00am - 11:00am':
          horarioInicioMateria = 9
          horarioSalidaMateria = 11
          break;
        case '11:00am - 1:00pm':
          horarioInicioMateria = 11
          horarioSalidaMateria = 13
          break;
        case '1:00pm - 2:00pm':
          horarioInicioMateria = 13
          horarioSalidaMateria = 14
          break;
        case '2:00pm - 4:00pm':
          horarioInicioMateria = 14
          horarioSalidaMateria = 16
          break;
        case '4:00pm - 6:00pm':
          horarioInicioMateria = 16
          horarioSalidaMateria = 18
          break;
        case '6:00pm - 8:00pm':
          horarioInicioMateria = 18
          horarioSalidaMateria = 20
          break;
        case '8:00pm - 10:00pm':
          horarioInicioMateria = 20
          horarioSalidaMateria = 22
          break;
        default:
          console.log(`El horario de ${myObject2[key2].materia} no se encuentra en la franja`);
      }

      //console.log(myObject2[key2].materia)
      //console.log(myObject2[key2].horas)
      HorarioLunes.push(myObject2[key2].materia)
      HorarioLunes.push(myObject2[key2].horas)
      let diaCounter = 0
      let dia = 1
      let mes = 7
      onSignInPressed(myObject2[key2])
      while (diaCounter < 126) {
        
        if ((mes % 2 != 0) && (dia + 7 <= 31)) {
          lH.push({
            id: myObject2[key2].codmateria,
            description: myObject2[key2].materia,
            startDate: new Date(2022, mes, dia + 7, horarioInicioMateria, 0),
            endDate: new Date(2022, mes, dia + 7, horarioSalidaMateria, 0),
            color: '#a81933',
            // ... more properties if needed,
            
          })
          
          
          dia = dia+7
        }
        else if ((mes % 2 == 0) && (dia + 7 <= 30)) {
          lH.push({
            id: myObject2[key2].codmateria,
            description: myObject2[key2].materia,
            startDate: new Date(2022, mes, dia + 7, horarioInicioMateria, 0),
            endDate: new Date(2022, mes, dia + 7, horarioSalidaMateria, 0),
            color: '#a81933',
            // ... more properties if needed,
          })
          dia = dia+7
        }
        //Para cuando me paso un mes par
        else if ((mes % 2 == 0) && (dia + 7 > 30)) {
          dia = -1 * (30 - (dia + 7))
          mes = mes + 1
          lH.push({
            id: myObject2[key2].codmateria,
            description: myObject2[key2].materia,
            startDate: new Date(2022, mes , dia, horarioInicioMateria, 0),
            endDate: new Date(2022, mes , dia, horarioSalidaMateria, 0),
            color: '#a81933',
            // ... more properties if needed,
          })
          //dia = dia+7
        }

        //Para cuando me paso un mes impar
        else if ((mes % 2 != 0) && ((dia + 7) > 31)) {
          dia = -1 * (31 - (dia + 7))
          mes = mes + 1

          lH.push({
            id: myObject2[key2].codmateria,
            description: myObject2[key2].materia,
            startDate: new Date(2022, mes , dia, horarioInicioMateria, 0),
            endDate: new Date(2022, mes , dia, horarioSalidaMateria, 0),
            color: '#a81933',
            // ... more properties if needed,
          })
          //dia = dia+7
        }


        diaCounter = diaCounter + 7
        console.log(diaCounter)

      }

      console.log(horarioInicioMateria)
      console.log(horarioSalidaMateria)
    }

  }

  console.log(HorarioLunes)
  console.log("lH")
  console.log(lH)
  ////////////////////////////////////////////
  ///Martes

  for (var key3 in myObject3) {

    if (myObject3.hasOwnProperty(key3)) {
      switch (myObject3[key3].horas) {
        case '7:00am - 9:00am':
          horarioInicioMateria = 7
          horarioSalidaMateria = 9
          break;
        case '9:00am - 11:00am':
          horarioInicioMateria = 9
          horarioSalidaMateria = 11
          break;
        case '11:00am - 1:00pm':
          horarioInicioMateria = 11
          horarioSalidaMateria = 13
          break;
        case '1:00pm - 2:00pm':
          horarioInicioMateria = 13
          horarioSalidaMateria = 14
          break;
        case '2:00pm - 4:00pm':
          horarioInicioMateria = 14
          horarioSalidaMateria = 16
          break;
        case '4:00pm - 6:00pm':
          horarioInicioMateria = 16
          horarioSalidaMateria = 18
          break;
        case '6:00pm - 8:00pm':
          horarioInicioMateria = 18
          horarioSalidaMateria = 20
          break;
        case '8:00pm - 10:00pm':
          horarioInicioMateria = 20
          horarioSalidaMateria = 22
          break;
        default:
          console.log(`El horario de ${myObject3[key3].materia} no se encuentra en la franja`);
      }
      //console.log(myObject2[key2].materia)
      //console.log(myObject2[key2].horas)
      HorarioMartes.push(myObject3[key3].materia)
      HorarioMartes.push(myObject3[key3].horas)
      /*
      lH.push({
        id: myObject3[key3].codmateria,
        description: myObject3[key3].materia,
        startDate: new Date(2022, 7, 16, horarioInicioMateria, 0),
        endDate: new Date(2022, 7, 16, horarioSalidaMateria, 0),
        color: '#a81933',
        // ... more properties if needed,
      })
      */
      let diaCounter = 0
      let dia = 2
      let mes = 7
      
      
      while (diaCounter < 126) {
        
        if ((mes % 2 != 0) && (dia + 7 <= 31)) {
          lH.push({
            id: myObject3[key3].codmateria,
            description: myObject3[key3].materia,
            startDate: new Date(2022, mes, dia + 7, horarioInicioMateria, 0),
            endDate: new Date(2022, mes, dia + 7, horarioSalidaMateria, 0),
            color: '#a81933',
            // ... more properties if needed,
          })
          dia = dia+7
        }
        else if ((mes % 2 == 0) && (dia + 7 <= 30)) {
          lH.push({
            id: myObject3[key3].codmateria,
            description: myObject3[key3].materia,
            startDate: new Date(2022, mes, dia + 7, horarioInicioMateria, 0),
            endDate: new Date(2022, mes, dia + 7, horarioSalidaMateria, 0),
            color: '#a81933',
            // ... more properties if needed,
          })
          dia = dia+7
        }
        //Para cuando me paso un mes par
        else if ((mes % 2 == 0) && (dia + 7 > 30)) {
          dia = -1 * (30 - (dia + 7))
          mes = mes + 1
          lH.push({
            id: myObject3[key3].codmateria,
            description: myObject3[key3].materia,
            startDate: new Date(2022, mes , dia, horarioInicioMateria, 0),
            endDate: new Date(2022, mes , dia, horarioSalidaMateria, 0),
            color: '#a81933',
            // ... more properties if needed,
          })
          //dia = dia+7
        }

        //Para cuando me paso un mes impar
        else if ((mes % 2 != 0) && ((dia + 7) > 31)) {
          dia = -1 * (31 - (dia + 7))
          mes = mes + 1

          lH.push({
            id: myObject3[key3].codmateria,
            description: myObject3[key3].materia,
            startDate: new Date(2022, mes , dia, horarioInicioMateria, 0),
            endDate: new Date(2022, mes , dia, horarioSalidaMateria, 0),
            color: '#a81933',
            // ... more properties if needed,
          })
          //dia = dia+7
        }


        diaCounter = diaCounter + 7
        console.log(diaCounter)

      }
     



    }
  }
  ////////////////////////////////////////////
  ///Miercoles

  for (var key4 in myObject4) {

    if (myObject4.hasOwnProperty(key4)) {

      switch (myObject4[key4].horas) {
        case '7:00am - 9:00am':
          horarioInicioMateria = 7
          horarioSalidaMateria = 9
          break;
        case '9:00am - 11:00am':
          horarioInicioMateria = 9
          horarioSalidaMateria = 11
          break;
        case '11:00am - 1:00pm':
          horarioInicioMateria = 11
          horarioSalidaMateria = 13
          break;
        case '1:00pm - 2:00pm':
          horarioInicioMateria = 13
          horarioSalidaMateria = 14
          break;
        case '2:00pm - 4:00pm':
          horarioInicioMateria = 14
          horarioSalidaMateria = 16
          break;
        case '4:00pm - 6:00pm':
          horarioInicioMateria = 16
          horarioSalidaMateria = 18
          break;
        case '6:00pm - 8:00pm':
          horarioInicioMateria = 18
          horarioSalidaMateria = 20
          break;
        case '8:00pm - 10:00pm':
          horarioInicioMateria = 20
          horarioSalidaMateria = 22
          break;
        default:
          console.log(`El horario de ${myObject4[key4].materia} no se encuentra en la franja`);
      }
      //console.log(myObject2[key2].materia)
      //console.log(myObject2[key2].horas)
      HorarioMiercoles.push(myObject4[key4].materia)
      HorarioMiercoles.push(myObject4[key4].horas)
      /*
      lH.push({
        id: myObject4[key4].codmateria,
        description: myObject4[key4].materia,
        startDate: new Date(2022, 7, 17, horarioInicioMateria, 0),
        endDate: new Date(2022, 7, 17, horarioSalidaMateria, 0),
        color: '#a81933',
        // ... more properties if needed,
      })
      */


      let diaCounter = 0
      let dia = 3
      let mes = 7
      
      while (diaCounter < 126) {
        
        if ((mes % 2 != 0) && (dia + 7 <= 31)) {
          lH.push({
            id: myObject4[key4].codmateria,
            description: myObject4[key4].materia,
            startDate: new Date(2022, mes, dia + 7, horarioInicioMateria, 0),
            endDate: new Date(2022, mes, dia + 7, horarioSalidaMateria, 0),
            color: '#a81933',
            // ... more properties if needed,
          })
          dia = dia+7
        }
        else if ((mes % 2 == 0) && (dia + 7 <= 30)) {
          lH.push({
            id: myObject4[key4].codmateria,
            description: myObject4[key4].materia,
            startDate: new Date(2022, mes, dia + 7, horarioInicioMateria, 0),
            endDate: new Date(2022, mes, dia + 7, horarioSalidaMateria, 0),
            color: '#a81933',
            // ... more properties if needed,
          })
          dia = dia+7
        }
        //Para cuando me paso un mes par
        else if ((mes % 2 == 0) && (dia + 7 > 30)) {
          dia = -1 * (30 - (dia + 7))
          mes = mes + 1
          lH.push({
            id: myObject4[key4].codmateria,
            description: myObject4[key4].materia,
            startDate: new Date(2022, mes , dia, horarioInicioMateria, 0),
            endDate: new Date(2022, mes , dia, horarioSalidaMateria, 0),
            color: '#a81933',
            // ... more properties if needed,
          })
          //dia = dia+7
        }

        //Para cuando me paso un mes impar
        else if ((mes % 2 != 0) && ((dia + 7) > 31)) {
          dia = -1 * (31 - (dia + 7))
          mes = mes + 1

          lH.push({
            id: myObject4[key4].codmateria,
            description: myObject4[key4].materia,
            startDate: new Date(2022, mes , dia, horarioInicioMateria, 0),
            endDate: new Date(2022, mes , dia, horarioSalidaMateria, 0),
            color: '#a81933',
            // ... more properties if needed,
          })
          //dia = dia+7
        }


        diaCounter = diaCounter + 7
        console.log(diaCounter)

      }


    }
  }
  ////////////////////////////////////////////
  ///Jueves

  for (var key5 in myObject5) {

    if (myObject5.hasOwnProperty(key5)) {

      switch (myObject5[key5].horas) {
        case '7:00am - 9:00am':
          horarioInicioMateria = 7
          horarioSalidaMateria = 9
          break;
        case '9:00am - 11:00am':
          horarioInicioMateria = 9
          horarioSalidaMateria = 11
          break;
        case '11:00am - 1:00pm':
          horarioInicioMateria = 11
          horarioSalidaMateria = 13
          break;
        case '1:00pm - 2:00pm':
          horarioInicioMateria = 13
          horarioSalidaMateria = 14
          break;
        case '2:00pm - 4:00pm':
          horarioInicioMateria = 14
          horarioSalidaMateria = 16
          break;
        case '4:00pm - 6:00pm':
          horarioInicioMateria = 16
          horarioSalidaMateria = 18
          break;
        case '6:00pm - 8:00pm':
          horarioInicioMateria = 18
          horarioSalidaMateria = 20
          break;
        case '8:00pm - 10:00pm':
          horarioInicioMateria = 20
          horarioSalidaMateria = 22
          break;
        default:
          console.log(`El horario de ${myObject5[key5].materia} no se encuentra en la franja`);
      }
      //console.log(myObject2[key2].materia)
      //console.log(myObject2[key2].horas)
      HorarioJueves.push(myObject5[key5].materia)
      HorarioJueves.push(myObject5[key5].horas)
      /*
      lH.push({
        id: myObject5[key5].codmateria,
        description: myObject5[key5].materia,
        startDate: new Date(2022, 7, 18, horarioInicioMateria, 0),
        endDate: new Date(2022, 7, 18, horarioSalidaMateria, 0),
        color: '#a81933',
        // ... more properties if needed,
      })
      */


      let diaCounter = 0
      let dia = 4
      let mes = 7
      while (diaCounter < 126) {
        
        if ((mes % 2 != 0) && (dia + 7 <= 31)) {
          lH.push({
            id: myObject5[key5].codmateria,
            description: myObject5[key5].materia,
            startDate: new Date(2022, mes, dia + 7, horarioInicioMateria, 0),
            endDate: new Date(2022, mes, dia + 7, horarioSalidaMateria, 0),
            color: '#a81933',
            // ... more properties if needed,
          })
          dia = dia+7
        }
        else if ((mes % 2 == 0) && (dia + 7 <= 30)) {
          lH.push({
            id: myObject5[key5].codmateria,
            description: myObject5[key5].materia,
            startDate: new Date(2022, mes, dia + 7, horarioInicioMateria, 0),
            endDate: new Date(2022, mes, dia + 7, horarioSalidaMateria, 0),
            color: '#a81933',
            // ... more properties if needed,
          })
          dia = dia+7
        }
        //Para cuando me paso un mes par
        else if ((mes % 2 == 0) && (dia + 7 > 30)) {
          dia = -1 * (30 - (dia + 7))
          mes = mes + 1
          lH.push({
            id: myObject5[key5].codmateria,
            description: myObject5[key5].materia,
            startDate: new Date(2022, mes , dia, horarioInicioMateria, 0),
            endDate: new Date(2022, mes , dia, horarioSalidaMateria, 0),
            color: '#a81933',
            // ... more properties if needed,
          })
          //dia = dia+7
        }

        //Para cuando me paso un mes impar
        else if ((mes % 2 != 0) && ((dia + 7) > 31)) {
          dia = -1 * (31 - (dia + 7))
          mes = mes + 1

          lH.push({
            id: myObject5[key5].codmateria,
            description: myObject5[key5].materia,
            startDate: new Date(2022, mes , dia, horarioInicioMateria, 0),
            endDate: new Date(2022, mes , dia, horarioSalidaMateria, 0),
            color: '#a81933',
            // ... more properties if needed,
          })
          //dia = dia+7
        }


        diaCounter = diaCounter + 7
        console.log(diaCounter)

      }



    }
  }
  ////////////////////////////////////////////
  ///Viernes

  for (var key6 in myObject6) {

    if (myObject6.hasOwnProperty(key6)) {

      switch (myObject6[key6].horas) {
        case '7:00am - 9:00am':
          horarioInicioMateria = 7
          horarioSalidaMateria = 9
          break;
        case '9:00am - 11:00am':
          horarioInicioMateria = 9
          horarioSalidaMateria = 11
          break;
        case '11:00am - 1:00pm':
          horarioInicioMateria = 11
          horarioSalidaMateria = 13
          break;
        case '1:00pm - 2:00pm':
          horarioInicioMateria = 13
          horarioSalidaMateria = 14
          break;
        case '2:00pm - 4:00pm':
          horarioInicioMateria = 14
          horarioSalidaMateria = 16
          break;
        case '4:00pm - 6:00pm':
          horarioInicioMateria = 16
          horarioSalidaMateria = 18
          break;
        case '6:00pm - 8:00pm':
          horarioInicioMateria = 18
          horarioSalidaMateria = 20
          break;
        case '8:00pm - 10:00pm':
          horarioInicioMateria = 20
          horarioSalidaMateria = 22
          break;
        default:
          console.log(`El horario de ${myObject6[key6].materia} no se encuentra en la franja`);
      }
      //console.log(myObject2[key2].materia)
      //console.log(myObject2[key2].horas)
      HorarioViernes.push(myObject6[key6].materia)
      HorarioViernes.push(myObject6[key6].horas)
      /*
      lH.push({
        id: myObject6[key6].codmateria,
        description: myObject6[key6].materia,
        startDate: new Date(2022, 7, 19, horarioInicioMateria, 0),
        endDate: new Date(2022, 7, 19, horarioSalidaMateria, 0),
        color: '#a81933',
        // ... more properties if needed,
      })*/

      let diaCounter = 0
      let dia = 5
      let mes = 7
      while (diaCounter < 126) {
        
        if ((mes % 2 != 0) && (dia + 7 <= 31)) {
          lH.push({
            id: myObject6[key6].codmateria,
            description: myObject6[key6].materia,
            startDate: new Date(2022, mes, dia + 7, horarioInicioMateria, 0),
            endDate: new Date(2022, mes, dia + 7, horarioSalidaMateria, 0),
            color: '#a81933',
            // ... more properties if needed,
          })
          dia = dia+7
        }
        else if ((mes % 2 == 0) && (dia + 7 <= 30)) {
          lH.push({
            id: myObject6[key6].codmateria,
            description: myObject6[key6].materia,
            startDate: new Date(2022, mes, dia + 7, horarioInicioMateria, 0),
            endDate: new Date(2022, mes, dia + 7, horarioSalidaMateria, 0),
            color: '#a81933',
            // ... more properties if needed,
          })
          dia = dia+7
        }
        //Para cuando me paso un mes par
        else if ((mes % 2 == 0) && (dia + 7 > 30)) {
          dia = -1 * (30 - (dia + 7))
          mes = mes + 1
          lH.push({
            id: myObject6[key6].codmateria,
            description: myObject6[key6].materia,
            startDate: new Date(2022, mes , dia, horarioInicioMateria, 0),
            endDate: new Date(2022, mes , dia, horarioSalidaMateria, 0),
            color: '#a81933',
            // ... more properties if needed,
          })
          //dia = dia+7
        }

        //Para cuando me paso un mes impar
        else if ((mes % 2 != 0) && ((dia + 7) > 31)) {
          dia = -1 * (31 - (dia + 7))
          mes = mes + 1

          lH.push({
            id: myObject6[key6].codmateria,
            description: myObject6[key6].materia,
            startDate: new Date(2022, mes , dia, horarioInicioMateria, 0),
            endDate: new Date(2022, mes , dia, horarioSalidaMateria, 0),
            color: '#a81933',
            // ... more properties if needed,
          })
          //dia = dia+7
        }


        diaCounter = diaCounter + 7
        console.log(diaCounter)

      }

    }
  }
  ////////////////////////////////////////////
  ///Sábado

  for (var key7 in myObject7) {

    if (myObject7.hasOwnProperty(key7)) {

      switch (myObject7[key7].horas) {
        case '7:00am - 9:00am':
          horarioInicioMateria = 7
          horarioSalidaMateria = 9
          break;
        case '9:00am - 11:00am':
          horarioInicioMateria = 9
          horarioSalidaMateria = 11
          break;
        case '11:00am - 1:00pm':
          horarioInicioMateria = 11
          horarioSalidaMateria = 13
          break;
        case '1:00pm - 2:00pm':
          horarioInicioMateria = 13
          horarioSalidaMateria = 14
          break;
        case '2:00pm - 4:00pm':
          horarioInicioMateria = 14
          horarioSalidaMateria = 16
          break;
        case '4:00pm - 6:00pm':
          horarioInicioMateria = 16
          horarioSalidaMateria = 18
          break;
        case '6:00pm - 8:00pm':
          horarioInicioMateria = 18
          horarioSalidaMateria = 20
          break;
        case '8:00pm - 10:00pm':
          horarioInicioMateria = 20
          horarioSalidaMateria = 22
          break;
        default:
          console.log(`El horario de ${myObject7[key7].materia} no se encuentra en la franja`);
      }
      //console.log(myObject2[key2].materia)
      //console.log(myObject2[key2].horas)
      HorarioSabado.push(myObject7[key7].materia)
      HorarioSabado.push(myObject7[key7].horas)
      /*
      lH.push({
        id: myObject7[key7].codmateria,
        description: myObject7[key7].materia,
        startDate: new Date(2022, 7, 20, horarioInicioMateria, 0),
        endDate: new Date(2022, 7, 20, horarioSalidaMateria, 0),
        color: '#a81933',
        // ... more properties if needed,
      })
      */
      let diaCounter = 0
      let dia = 6
      let mes = 7
      while (diaCounter < 126) {
        
        if ((mes % 2 != 0) && (dia + 7 <= 31)) {
          lH.push({
            id: myObject7[key7].codmateria,
            description: myObject7[key7].materia,
            startDate: new Date(2022, mes, dia + 7, horarioInicioMateria, 0),
            endDate: new Date(2022, mes, dia + 7, horarioSalidaMateria, 0),
            color: '#a81933',
            // ... more properties if needed,
          })
          dia = dia+7
        }
        else if ((mes % 2 == 0) && (dia + 7 <= 30)) {
          lH.push({
            id: myObject7[key7].codmateria,
            description: myObject7[key7].materia,
            startDate: new Date(2022, mes, dia + 7, horarioInicioMateria, 0),
            endDate: new Date(2022, mes, dia + 7, horarioSalidaMateria, 0),
            color: '#a81933',
            // ... more properties if needed,
          })
          dia = dia+7
        }
        //Para cuando me paso un mes par
        else if ((mes % 2 == 0) && (dia + 7 > 30)) {
          dia = -1 * (30 - (dia + 7))
          mes = mes + 1
          lH.push({
            id: myObject7[key7].codmateria,
            description: myObject7[key7].materia,
            startDate: new Date(2022, mes , dia, horarioInicioMateria, 0),
            endDate: new Date(2022, mes , dia, horarioSalidaMateria, 0),
            color: '#a81933',
            // ... more properties if needed,
          })
          //dia = dia+7
        }

        //Para cuando me paso un mes impar
        else if ((mes % 2 != 0) && ((dia + 7) > 31)) {
          dia = -1 * (31 - (dia + 7))
          mes = mes + 1

          lH.push({
            id: myObject7[key7].codmateria,
            description: myObject7[key7].materia,
            startDate: new Date(2022, mes , dia, horarioInicioMateria, 0),
            endDate: new Date(2022, mes , dia, horarioSalidaMateria, 0),
            color: '#a81933',
            // ... more properties if needed,
          })
          //dia = dia+7
        }


        diaCounter = diaCounter + 7
        console.log(diaCounter)

      }

    }
  }
  ////////////////////////////////////////////
  ///Domingo

  for (var key8 in myObject8) {

    if (myObject8.hasOwnProperty(key8)) {
      switch (myObject8[key8].horas) {
        case '7:00am - 9:00am':
          horarioInicioMateria = 7
          horarioSalidaMateria = 9
          break;
        case '9:00am - 11:00am':
          horarioInicioMateria = 9
          horarioSalidaMateria = 11
          break;
        case '11:00am - 1:00pm':
          horarioInicioMateria = 11
          horarioSalidaMateria = 13
          break;
        case '1:00pm - 2:00pm':
          horarioInicioMateria = 13
          horarioSalidaMateria = 14
          break;
        case '2:00pm - 4:00pm':
          horarioInicioMateria = 14
          horarioSalidaMateria = 16
          break;
        case '4:00pm - 6:00pm':
          horarioInicioMateria = 16
          horarioSalidaMateria = 18
          break;
        case '6:00pm - 8:00pm':
          horarioInicioMateria = 18
          horarioSalidaMateria = 20
          break;
        case '8:00pm - 10:00pm':
          horarioInicioMateria = 20
          horarioSalidaMateria = 22
          break;
        default:
          console.log(`El horario de ${myObject8[key8].materia} no se encuentra en la franja`);
      }
      //console.log(myObject2[key2].materia)
      //console.log(myObject2[key2].horas)
      HorarioDomingo.push(myObject8[key8].materia)
      HorarioDomingo.push(myObject8[key8].horas)
      
      /*lH.push({
        id: myObject8[key8].codmateria,
        description: myObject8[key8].materia,
        startDate: new Date(2022, 7, 21, horarioInicioMateria, 0),
        endDate: new Date(2022, 7, 21, horarioSalidaMateria, 0),
        color: '#a81933',
        // ... more properties if needed,
      })*/
      let diaCounter = 0
      let dia = 7
      let mes = 7
      while (diaCounter < 126) {
        
        if ((mes % 2 != 0) && (dia + 7 <= 31)) {
          lH.push({
            id: myObject8[key8].codmateria,
            description: myObject8[key8].materia,
            startDate: new Date(2022, mes, dia + 7, horarioInicioMateria, 0),
            endDate: new Date(2022, mes, dia + 7, horarioSalidaMateria, 0),
            color: '#a81933',
            // ... more properties if needed,
          })
          dia = dia+7
        }
        else if ((mes % 2 == 0) && (dia + 7 <= 30)) {
          lH.push({
            id: myObject8[key8].codmateria,
            description: myObject8[key8].materia,
            startDate: new Date(2022, mes, dia + 7, horarioInicioMateria, 0),
            endDate: new Date(2022, mes, dia + 7, horarioSalidaMateria, 0),
            color: '#a81933',
            // ... more properties if needed,
          })
          dia = dia+7
        }
        //Para cuando me paso un mes par
        else if ((mes % 2 == 0) && (dia + 7 > 30)) {
          dia = -1 * (30 - (dia + 7))
          mes = mes + 1
          lH.push({
            id: myObject8[key8].codmateria,
            description: myObject8[key8].materia,
            startDate: new Date(2022, mes , dia, horarioInicioMateria, 0),
            endDate: new Date(2022, mes , dia, horarioSalidaMateria, 0),
            color: '#a81933',
            // ... more properties if needed,
          })
          //dia = dia+7
        }

        //Para cuando me paso un mes impar
        else if ((mes % 2 != 0) && ((dia + 7) > 31)) {
          dia = -1 * (31 - (dia + 7))
          mes = mes + 1

          lH.push({
            id: myObject8[key8].codmateria,
            description: myObject8[key8].materia,
            startDate: new Date(2022, mes , dia, horarioInicioMateria, 0),
            endDate: new Date(2022, mes , dia, horarioSalidaMateria, 0),
            color: '#a81933',
            // ... more properties if needed,
          })
          //dia = dia+7
        }


        diaCounter = diaCounter + 7
        console.log(diaCounter)

      }

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
      startDate: new Date(2022, 7, 14, 9, 0),
      endDate: new Date(2022, 7, 14, 11, 0),
      color: '#a81933',
      // ... more properties if needed,
    },
    {
      id: 4566,
      description: 'Sistemas de informacion',
      startDate: new Date(2022, 7, 14, 11, 0),
      endDate: new Date(2022, 7, 14, 13, 0),
      color: '#a81933',
      // ... more properties if needed,
    },

    {
      id: 12345,
      description: 'POO',
      startDate: new Date(2022, 7, 15, 9, 0),
      endDate: new Date(2022, 7, 15, 11, 0),
      color: '#a81933',
      // ... more properties if needed,
    },
    {
      id: 32145,
      description: 'Bases de datos',
      startDate: new Date(2022, 7, 15, 11, 0),
      endDate: new Date(2022, 7, 15, 13, 0),
      color: '#a81933',
      // ... more properties if needed,
    },
    {
      id: 54634,
      description: 'Comp. Visual',
      startDate: new Date(2022, 7, 16, 7, 0),
      endDate: new Date(2022, 7, 16, 9, 0),
      color: '#a81933',
      // ... more properties if needed,
    },

    {
      id: 76678,
      description: 'SIDA',
      startDate: new Date(2022, 7, 16, 9, 0),
      endDate: new Date(2022, 7, 16, 11, 0),
      color: '#a81933',
      // ... more properties if needed,
    },
    {
      id: 4566,
      description: 'Sistemas de informacion',
      startDate: new Date(2022, 7, 16, 11, 0),
      endDate: new Date(2022, 7, 16, 13, 0),
      color: '#a81933',
      // ... more properties if needed,
    },
    {
      id: 12345,
      description: 'POO',
      startDate: new Date(2022, 7, 17, 9, 0),
      endDate: new Date(2022, 7, 17, 11, 0),
      color: '#a81933',
      // ... more properties if needed,
    },
    {
      id: 32145,
      description: 'Bases de datos',
      startDate: new Date(2022, 7, 17, 11, 0),
      endDate: new Date(2022, 7, 17, 13, 0),
      color: '#a81933',
      // ... more properties if needed,
    },
    // More events...
  ];

  return (



    <WeekView
      events={lH}
      selectedDate={new Date(2022, 7, 15)}
      numberOfDays={5}
      startHour={6}
      allowScrollByDay="true"
      showTitle="true"
      weekStartsOn={1}
      locale='es'
      onEventPress={onSignInPressed}

    //timeStep={30}
    />







  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 10,
  },
  logo: {
    width: '115%',
    height: '40%',
    marginVertical: 25,

  },

})

export default ScheduleScreen
