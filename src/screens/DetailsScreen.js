import React, { useState } from "react";
import { View, Text, Button, Alert, TextInput, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

export default DetailsScreen = () => {
    const navigation = useNavigation()
    const route = useRoute()
    const [text, setText] = useState("")
    return (
        <View style={{ flex: 1, backgroundColor: 'dodgerblue', alignItems: 'center', justifyContent: 'center' }}>
            <Text>Welcome Details Screen</Text>
            <Text>Dear {route.params.name}</Text>
            <Button title="Go Back!" onPress={navigation.goBack} />
            <Button title="Press Me!" onPress={() => Alert.alert("Hello " + route.params.name, "Do you enjoy the tutorial?",
                [
                    { text: "Yes" },
                    { text: "Hell Yes!" }
                ]
            )} />

            <TextInput
                style={{ width: 200, height: 50, borderWidth: 1 }}
                placeholder="What is your name?"
                value={text}
                onChangeText={setText}
            />
            <Text>Text: {text}</Text>
            <Button title="Press Me!" onPress={() => console.log("button pressed!")} />
            <Image
                //source={require("./logo.jpg")}
                source={{
                    uri: "https://png.pngtree.com/element_origin_min_pic/16/11/02/bd886d7ccc6f8dd8db17e841233c9656.jpg",
                    width: 200,
                    height: 200
                }}
            />

        </View>
    )
}