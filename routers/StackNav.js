import { createStackNavigator } from "@react-navigation/stack";
import Contact from "../Screens/Contact";
import Profile from "../Screens/Profile";
import Favourite from "../Screens/Favourite";


const Stack = createStackNavigator()
const StackNav =()=>{


    return(
        <Stack.Navigator
        backBehavior="order">
            <Stack.Screen name ="Contact" component={Contact}
                options={{
                    headerTitleAlign:"center",
                }}
            />
            <Stack.Screen name ="Profile" component={Profile}/>
            <Stack.Screen name ="Favorties" component={Favourite}
                options={{
                    headerTitleAlign:"center",
                }}
            />
        </Stack.Navigator>
    )





}
export default StackNav;