import React from "react";
import {Text, StyleSheet, View} from "react-native";

const QuoteScreen = () => {
    let quote = "The only limit to our realization of tomorrow is our doubts of today.";
    const author = "Franklin D. Roosevelt";

    return (
        <View style={styles.container}>
            <Text>{quote}</Text>
            <Text>{author}</Text>
        </View>
    );
};
export default QuoteScreen;