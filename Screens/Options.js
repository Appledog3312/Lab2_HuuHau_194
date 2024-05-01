import { TouchableOpacity, View,Divider, StyleSheet } from "react-native"
import { Text } from "react-native-paper"


const Options =()=>{
    return(
        <View style={{
            flex:1
        }}>
            <View style={{
                flex:1
            }}>
            <TouchableOpacity style={myStyle.touchbox}>
                <Text style={myStyle.text}>
                    Update Profile
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={myStyle.touchbox}>
                <Text style={myStyle.text}>
                    Security
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={myStyle.touchbox}>
                <Text style={myStyle.text}>
                    History
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={myStyle.touchbox}>
                <Text style={myStyle.text}>
                    Log out
                </Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}
export default Options;

const myStyle = StyleSheet.create({
    touchbox:{
        borderBottomWidth : 0.5,
        padding : 10,
        margin : 10,
    },
    text:{
        fontSize:15,
        fontFamily:"bold"
    }
})