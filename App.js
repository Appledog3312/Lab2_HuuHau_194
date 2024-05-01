import"react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import BottomTabNav from "./routers/BottomTabNav";

const App=()=>{
    return (
        <NavigationContainer>
            <PaperProvider>
                <BottomTabNav/>
            </PaperProvider>
        </NavigationContainer>

    )
}
export default App;