import React from "react";
import {View,Text,StyleSheet,Flatlist} from "react-native";

class PostsScreen extends React.Component {
    construction(){
        super();
        this.state = {
            posts:[],
        };
    }

    async componentDidMount(){
        const data = await fetch("https://jsonplaceholder.typicode.com/posts");
        const jsonData = await data.json();
        this.setState({
            posts: jsonData,
        });
    }

    render(){
        const {posts} = this.state;
        return(
            <View>
                <Text>Posts Screen</Text>
                <Flatlist>
                    keyExtractor={posts => posts.id}
                    data = {posts}
                    initialNumToRender={10}
                    renderItem = {({item}) => (
                        <View>
                            <Text>{item.id}</Text>
                            <Text>{item.title}</Text>
                        </View>
                    )

                }
                </Flatlist>

            </View>
        );
    }
}

const styles = StyleSheet.create({});

export default PostsScreen;