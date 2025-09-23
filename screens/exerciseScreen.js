import React from "react";
import {Text, StyleSheet, View} from "react-native";

const ExcerciseScreen = () => {
    //deklaracija varijabli let const

    let message1 = "Hi there!";

    let message2 = "Hello there!";

    return{
        <View style={styles.container}>
            <Text>{message1}</Text>
            <Text>{message2}</Text>
        </View>
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:"center",
        justifyContent:"center",
    },
});

export default ExcerciseScreen;

//komponenta QuoteScreen prikazuje citat i njegovog autora
//korisitit let i const varijable za citat i autora
