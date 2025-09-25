import React from "react";
import {Text, StyleSheet, FlatList, View} from "react-native"

const students=[
    {name:"Sara", surname:"Saric",age="25"},
    {name:"Nidal", surname:"Nidalović",age="28"},
    {name:"Lejla", surname:"Begić",age="17"}
];

const ListScreen = () => {
    return (
        <View>
            <Text>ListScreen</Text>
            <FlatList
            keyExtractor={student=>student.surname}
            data={students}
            renderItem={({item})=>{
                return <Text style={styles.studentWrapper}>{item.name} {item.surname} {item.age}</Text>
            }
        }
            />

        </View>
    )
};

const style=StyleSheet.create({})

export default ListScreen;