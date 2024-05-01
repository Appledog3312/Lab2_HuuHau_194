import { useEffect, useState } from "react"
import { FlatList, TouchableOpacity, View } from "react-native"
import { ActivityIndicator, Avatar, Text } from "react-native-paper"
import { fetchContacts } from "../utility/api"

const Favourite = ({ navigation }) => {
    const [contacts, setContacts] = useState([])
    const [loading, setLoading] = useState([])
    const [errorr, setErrorr] = useState([])

    useEffect(() => {
        fetchContacts()
            .then(data => {
                setContacts(data)
                setLoading(false)
                setErrorr(false)
            })
            .catch(e => {
                setLoading(false)
                setErrorr(errorr)
            })
    }, [])

    const renderItem = ({ item }) => {
        const { avatar, name } = item 
        return (
            <TouchableOpacity onPress={() => navigation.navigate("Profile", { contact: item })}
                style={{ padding: 20 }}>
                <View style={{ alignItems: "center" }}>
                    <Avatar.Image source={{ uri: avatar }} size={100} />
                    <Text>{name}</Text> 
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View>
            {loading && <ActivityIndicator size={40} color="blue" />}
            {errorr && <Text>Error loading ........</Text>}
            <FlatList
                data={contacts}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                numColumns={3}
                contentContainerStyle={{ alignItems: "center" }}
            />
        </View>
    )
}

export default Favourite;
