import { View,Text,TouchableOpacity,StyleSheet } from "react-native"

const options=["Pomodoro","ShortBreak","LongBreak"]

export default function Header({time}){
return(
    <View style={{flexDirection:"row"}}>
        {options.map((item,index)=>(
            <TouchableOpacity key={index} style={styles.itemStyle}>
                <Text>{item}</Text>
            </TouchableOpacity>
        ))}
        
    </View>
)
}
const styles = StyleSheet.create({
    itemStyle: {
        width:"33%",

        borderWidth:3,
        padding:5,

    }
}) 