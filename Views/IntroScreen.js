import React from 'react'
import { View,Text, Image } from 'react-native'
import introgif from '../assets/icons8-calculator-64.png'
const IntroScreen = () => {
  return (
    <View>
        <Text>IntroScreen</Text>
        <Image source={introgif} />
    </View>
  )
}

export default IntroScreen