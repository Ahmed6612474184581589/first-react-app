import React from "react";
import {Text, StyleSheet} from "react-native";
import { Button } from "react-native-web";

const BoxScreen = () => {
    return(
    <View style={styles.wrapper}>
        <View style={styles.boxStyle}></View>
        <View style={styles.boxStyle2}></View>
        <View style={styles.boxStyle3}></View>
        <View style={styles.boxStyle4}></View>
        <View style={styles.boxStyle5}></View>
        <View style={styles.boxStyle6}></View>
    </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex:1,
        flexDirection:"column",
        flexWrap:"wrap",
        alignItems:"stretch",
        backgroundColor:"#eee"
    },
    boxStyle: {
        width:100,
        height:100,
        backgroundColor:"red",
    },
    boxStyle2: {
        width:100,
        height:100,
        backgroundColor:"yellow",
    },
    boxStyle3: {
        width:100,
        height:100,
        backgroundColor:"green",
    },
    boxStyle4: {
        width:100,
        height:100,
        backgroundColor:"blue",
    },
    boxStyle5: {
        width:100,
        height:100,
        backgroundColor:"orange",
    },
    boxStyle6: {
        width:100,
        height:100,
        backgroundColor:"purple",
    },
});

export default BoxScreen;

//novi screen "BoxScreemChallagne", dodati u navigaciju
//u njemu dodat tri boxa različitih boja i da budu horizontalkno poredane, evelny između jedne druge