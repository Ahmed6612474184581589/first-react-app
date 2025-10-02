import React from 'react';
import {View, Text, StyleSheet, Button, Touchable} from 'react-native';

const ButtonScreen = () => {
    return (
        <View>
            <Text>Quiz Screen</Text>
            <Text>...</Text>
            <Text>PRVO PITANJE</Text>
            <Text>...</Text>
            <Text>Ko osvaja premijer ligu BiH ove godine?</Text>
            <Button color="red" title="Sarajevo" onPress={()=> console.log("KAKVI ONI AHAHHAHAHAHAHAHHAHAHAH")}/>
            <Button color="blue" title="Željeznicar" onPress={()=> console.log("Logično")}/>
            <Button color="yellow" title="Velež" onPress={()=> console.log("Netačno")}/>
            <Button color="lightblue" title="Zrinjski" onPress={()=> console.log("Netačno")}/>
            <Button color="gray" title="Borac" onPress={()=> console.log("Vico?")}/>
        </View>
    );
};


export default quizScreen;