import React from "react";
import {Text, View, StyleSheet} from "react-native";
import StudentsDetails from "../components/StudentsDetails";

const StudentsScreen = () => {
    return (
        <View>
            <Text style={styles.text}>Student Details Component</Text>
            <StudentsDetails name="Ahmed" image={require("../assets/Avatar-1.jpeg")} description="Prvi Student"/>
            <StudentsDetails name="Marko" image={require("../assets/Avatar-2.jpeg")} description="Drugi Student"/>
            <StudentsDetails name="Haris" image={require("../assets/Avatar-3.jpeg")} description="Treci Student"/>
            <StudentsDetails name="Ahmo" image={require("../assets/Avatar-4.jpeg")} description="Četvrti Student"/>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 20,
    },
});

export default StudentsScreen;