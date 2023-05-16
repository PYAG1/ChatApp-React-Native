import React from 'react'
import { StyleSheet ,View,Text, Pressable} from 'react-native'

export default function Nextpage({navigation}) {
  return (
   <View style={style.newcontainer}>
<Text style={style.newtext}>HElp me</Text>
<Pressable onPress={()=>{navigation.navigate("new")}}>
    <Text>click me</Text>
</Pressable>
   </View>
  )
}

const style=StyleSheet.create({
    newcontainer:{
        flex:1,
        backgroundColor:"green",
        justifyContent:"center",
        alignItems:"center"
        
    },
    newtext:{
        fontSize:"30px",
        color:"white"
    }
})
