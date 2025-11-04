import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Product = ({ item }) => {
    return (
        <View>
            <Image source={{uri:`${item.img}`}} />
            <View>
                <Text>{props.name}</Text>
                <Text>{props.desc}</Text>
                <View>
                    <Text>Stock: {props.stock}</Text>
                    <Text>Price: {props.price}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer:{
        backgroundColor:"white",
        marginBottom:10,
        borderRadius:10,
    },
    img:{
        width:250,
        height:180,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    footer:{
        
    },
})