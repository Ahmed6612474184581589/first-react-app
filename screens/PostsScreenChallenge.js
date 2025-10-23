import react from "react";
import {View,Text,StyleSheet,FlatList} from "react-native";

class PostsScreenChallenge extends React.Component {
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
                <View style={styles.container}>
                     <Text>Posts Screen Challennge</Text>
                    <Flatlist>
                        keyExtractor={posts => posts.id}
                        data = {posts}
                        initialNumToRender={20}
                        renderItem = {({post}) => (
                            <View style={styles.card}>
                                <Text>{post.userId}</Text>
                                <Text>{post.id}</Text>
                                <Text>{post.title}</Text>
                                <Text>{post.body}</Text>
                             </View>
                        )
                    }
                    </Flatlist>
        
                </View>
            );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#fff",
        padding:15
    },
    card: {
        backgroundColor:"#f9f9f9",
        padding:10,
        marginVertical:5,
        borderRadius:5,
        elevation:1
    }

});

export default PostsScreenChallenge;