import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const MenuScreen = (props) => {
    console.log(props);
    return (
        <View>
            <Text style={styles.text}>Menu Screen</Text>
            <Button title="Go to list screen" onPress={() => props.navigation.navigate("List")}/>
            <Button title="Go to students screen" onPress={() => props.navigation.navigate("Students")}/>
            <Button title="Go to box screen" onPress={() => props.navigation.navigate("Box")}/>
            <Button title="Go to box challenge screen" onPress={() => props.navigation.navigate("BoxChallenge")}/>
            <Button title="Go to advanced box screen" onPress={() => props.navigation.navigate("AdvancedBox")}/>
            <Button title="Go to posts screen challenge" onPress={() => props.navigation.navigate("PostsScreenChallenge")}/>
            <Button title="Go to countries screen" onPress={() => props.navigation.navigate("Countries")}/>
        </View> //touchabel opacity koji će voditi na drugi screen
    );
};

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 20,
    },
});

export default MenuScreen;