import React from "react";
import {Text, StyleSheet, FlatList, View} from "react-native"

const hobbies=[
    {name:"Basketball"},
    {name:"Football"},
    {name:"Walking"},
    {name:"Swimming"},
    {name:"Cycling"}
];

const grades=[
    {name:"Math", grade:5},
    {name:"Physics", grade:4},
    {name:"Chemistry", grade:3},
    {name:"Biology", grade:1},
    {name:"History", grade:5}
];

const ListScreen = () => {
    return (
        <View>
            <Text>studentScreen</Text>
            <Text> Ahmed Jusupović </Text>
            <FlatList
            keyExtractor={hobby=>hobby.name}
            data={hobbies}
            renderItem={({item})=>{
                return <Text style={styles.studentWrapper}>{item.name}</Text>
            }
        }
            />

            <FlatList
            keyExtractor={grade=>grade.name}
            data={grades}
            renderItem={({item})=>{
                return <Text style={styles.studentWrapper}>{item.name}: {item.grade}</Text>;
            }}
            />

        </View>
    )
};

const styles=StyleSheet.create({
    studentWrapper:{
        padding:15,
        borderBottomWidth:1,
        borderColor:"#eee"
    }
});

export default ListScreen;