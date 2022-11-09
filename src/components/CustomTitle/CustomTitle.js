import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const CustomTitle = () => {
  return (
    <View>
        <Text style={styles.baseText}><Text style={styles.titleText}>Bienvenido a SIAM</Text></Text>
      
    </View> 
  )
}

const styles = StyleSheet.create({
    baseText: {
      fontFamily: "Cochin",
      color:"#161019",
      padding:20
    },
    titleText: {
      fontSize: 30,
      fontWeight: "bold"
    }
  });

export default CustomTitle