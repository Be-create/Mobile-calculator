import React from 'react'
import { View,Text, Image } from 'react-native'
import introgif from '../assets/icons8-calculator-64.png'
import { StyleSheet } from 'react-native';
const IntroScreen = () => {
  return (
    <View>
        <Text>IntroScreen</Text>
        <Image style={styles.image} source={introgif} />
    </View>
  )
}




const styles = StyleSheet.create({
  image : {
  outerHeight:"100px",
  innerHeight:"100px"
  }
})

export default IntroScreen