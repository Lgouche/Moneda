import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Platform, Text, View, Button, SafeAreaView } from 'react-native';
import { useState } from 'react';
import Header from './src/components/Header';
import Timer from './src/components/Timer';

const colors = ["#F7DC6F","#A2D9CE","#D7BDE2"];
export default function App() {
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25*60);
  const [currentTime, setCurrentTime]= useState("Pomo"|"Short"|"Break");
  return (
    //Este elemento permite en los ios poder poner los objetos son tocar el barra superior
<SafeAreaView styles={[styles.container]}>
    <View style={{paddingHorizontal:15, paddingTop: Platform.OS === "android" && 30, backgroundColor:colors[currentTime], paddingHorizontal:15, borderWidth:3}}>
      <Text style={styles.text}>Podometro</Text>
      <Text>{time}</Text>
      <Header
       currentTime={currentTime}
       setCurrentTime={setCurrentTime}
       setTime={setTime}/>
       <Timer time={time}/>
       
    </View>
</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontSize: 32,
    fontWeight:"bold"
  },
  fullScream:{
    flex:1
  }

});
