import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CalcScreen from './Views/CalcScreen';
import IntroScreen from './Views/IntroScreen';


export default function App() {
  const [isLoaded,setisLoaded] = useState(false)

setTimeout(()=> setisLoaded(true),2000)

  return (
    <View style={styles.container}>
     <Text>Hii There</Text>
     {isLoaded ? <CalcScreen/> : <IntroScreen/>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex:1,
    backgroundColor:"aqua",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
