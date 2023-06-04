import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default HomeScreen = () => {
    const navigation = useNavigation()
    const [name, setName] = useState("")
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'cyan',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text>Welcome Home Screen</Text>
            <Button
                title="Go to Details Screen"
                onPress={() => navigation.navigate("DetailsScreen", { name: name })} />
            <TextInput
                style={{
                    width: 200,
                    height: 50,
                    borderWidth: 1,
                    borderColor: 'white',
                    padding: 7
                }}
                placeholder="What is your Name?"
                value={name}
                onChangeText={setName}
            />
        </View>
    )
}