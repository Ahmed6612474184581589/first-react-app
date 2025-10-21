import React from "react";
import {Text, View, StyleSheet} from "react-native";

const BoxScreen = () => {
    return(
    <View styles={styles.wrapper}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
        <View style={styles.box3}></View>
    </View>
    );
};

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        flexDirection:"column",
    },
    box1: {
        width:100,
        height:100,
        backgroundColor:"#f54842",
        alignSelf:"left",
    },
    box2: {
        width:100,
        height:100,
        backgroundColor:"#f5a742",
        alignSelf:"center",
    },
    box3: {
        width:100,
        height:100,
        backgroundColor:"#424bf5",
        alignSelf:"right",
    },
});
