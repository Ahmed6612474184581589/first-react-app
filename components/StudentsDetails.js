import React from "react";
import {Text, View, StyleSheet} from "react-native";

const StudentsDetails = (props) => {
    return (
        <View>
            <View>
                <Image source={props.image}></Image>
            </View>
            <View>
                <Text style={styles.text}>{props.name}</Text>
                <Text>{props.description}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardWrapper:{
        flexDirection:"row",
        backgroundColor:"white",
        borderRadius:8,
        width:"90%",
        alignSelf:"center",
        alignSelf:"center",
        marginBottom:15,
    },
    img: {
        width:100,
        height:100,
        width:100,
        borderTopLeftRadius:8,
        borderBottomLeftRadius:8,
    };
    infoWrapper:{
        marginLeft:20,
        marginTop:20,
    };
    
});

export default StudentsDetails;