import { createStackNavigator } from "@react-navigation/stack";
import Users from "../Screens/Users";
import Options from "../Screens/Options";


const Stack = createStackNavigator()
const CustomStackUser =()=>{


    return(
        <Stack.Navigator>
            <Stack.Screen name ="User" component={Users}
                options={{
                    headerTitle:'Me',
                    headerTitleAlign:"center",
                }}
            />
            <Stack.Screen name ="Options" component={Options}/>
        </Stack.Navigator>
    )

}
export default CustomStackUser;