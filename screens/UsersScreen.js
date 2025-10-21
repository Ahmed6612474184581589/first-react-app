import React from "react";
import {Text, View, StyleSheet, FlatList} from "react-native";

class UsersScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            users: [],
        };
    }

    async componentDidMount(){
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        const jsonData = await data.json();
        this.setState({
            users: jsonData,
        });
    }

    render() {
        const {users} = this.state;
        return (
            <View>
                <Text>Users Screen</Text>
                <Flatlist>
                    keyExtractor={(users) => users.id}
                    data={users}
                    initialNumToRender={10}
                    renderItem = {({item}) => (
                        <View>
                            <Text>{item.id}</Text>
                        </View>
                    )}
                </Flatlist>
            </View>
        )
    }
}

export default UsersScreen;