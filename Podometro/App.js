import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Platform, Text, View, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import Header from './src/components/Header';
import Timer from './src/components/Timer';

const colors = ["#F7DC6F","#A2D9CE","#D7BDE2"];
export default function App() {
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25*60);
  const [currentTime, setCurrentTime]= useState("Pomo"|"Short"|"Break");
  const [isActive,setIsActive]=useState(false)

  useEffect(()=>{
    let interval=null;
    if(isActive){
      //run
      interval = setInterval(()=>{
        setTime(time-1);
      },1000);
    } else {
      //clear
      clearInterval(interval);
    }
    return()=> clearInterval(interval);
  },[isActive,time])


  function handlerStartStop() {
    setIsActive(!isActive);
  }


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
       <TouchableOpacity style={styles.button} onPress={handlerStartStop}>
        <Text style={{color:"white",fontWeight:"bold"}}>{isActive ? "Stop" : "Start"}</Text>
       </TouchableOpacity>
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
  },
  button: {
    backgroundColor:"#333333",
    padding:15,
    borderRadius:15,
    marginTop:15,
    alignItems:"center"
  }

});
