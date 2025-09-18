//importovanje biblioteka
import React from "react";
import {Text, StyleSheet, View} from "react-native";

//kreiranje komponente
const MainScreen = () => {
    return (
    <View style={styles.container}> 
        <Text style={styles.textStyle}>This is main screen</Text>
    </View>
    );
};


//kreiranhje stylesheeta
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0077ffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: 30,
    },
});

//exportovanje komponente
export default MainScreen;