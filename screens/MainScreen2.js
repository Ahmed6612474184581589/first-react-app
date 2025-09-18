//importovanje biblioteka
import React from "react";
import {Text, StyleSheet, View} from "react-native";

//kreiranje komponente
const MainScreen2 = () => {
    return (
    <View style={styles.container}> 
        <Text>Tekst za glavni skirn koji je napravio Ahmed</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>Sad pazi pjesme</Text>
        <Text>...</Text>
        <Text>...</Text>
        <Text>Samo sklopi okice i zovi mi ime</Text>
        <Text>zovi mi ime</Text>
        <Text>Jedan će luđak letjeti</Text>
        <Text>Kroooz planine, kroooz planine</Text>
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
        fontColor:"#fff"
    },
});

//exportovanje komponente
export default MainScreen2;