import React from 'react';
import {View, Text, StyleSheet, Button, Touchable} from 'react-native';

const ButtonScreen = () => {
    let counter = 0;
    let counter1 = 0;
    return (
        <View>
            <Text>ButtonScreen</Text>
            <Button title="Click me!" 
            onPress={()=> console.log("Button Clicked: ", counter++)
                }
            />
            <TouchableOpacity style={styles.touchableBtn} onPress={()=> console.log("TouchableOpacity Clicked: ", counter1++)}>
                <Text>Click touchable element</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create{
    touchableBtn:{
        backgroundColor:"purple",
        marginVertical:15,
        padding:20,
        borderRadius:6,
        marginHorizontal:20,
    };
};
