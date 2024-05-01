import 'react-native-gesture-handler';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons } from '@expo/vector-icons'; 

import Favourite from "../Screens/Favourite";
import StackNav from "./StackNav";
import CustomStackUser from "./CustomStackUser";

const Tab = createMaterialBottomTabNavigator()
const BottomTabNav =()=>{
    return(
        <Tab.Navigator
            screenOptions={{headerShown:false}}
            backBehavior="order"
        >
            <Tab.Screen name="StackNavigator" component={StackNav}
                options={{
                    title:"Contacts",
                    tabBarIcon: "format-list-bulleted"
                }}
            />
            <Tab.Screen name="Favorites" component={Favourite}
                options={{
                    tabBarIcon: "star-outline"
                }}
            />
            <Tab.Screen name="StackNavigatorUser" component={CustomStackUser}
                options={{
                    title:"User",
                    tabBarIcon: "account-outline"
                }}
            />
        </Tab.Navigator>
    )

}
export default BottomTabNav;
