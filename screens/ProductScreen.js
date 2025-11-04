import react from "react";
import {View,Text,StyleSheet,FlatList} from "react-native";
import data from "../data/products.json";

class ProductScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            products: [],
        };
    }
    componentDidMount(){
        this.setState({
            products: data,
        });
    }
    render(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <Text>Top products of 2020</Text>
                    <FlatList
                        data={this.state.products}
                        renderItem={({item})}=>(
                            <View style={styles.cardWrapper}> 
                                <Text>Name: {item.name}</Text>
                                <Text>Category: {item.category}</Text>
                                <Text>Price: {item.price}</Text>
                                <Text>Stock: {item.stock}</Text>
                                <Image source={require("../data/products.json" + item.image)} />
                                <Text>Description: {item.description}</Text>
                            </View>
                        )}
                    />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    screenTitle:{
        fontSize:20,
        textAlign:"center",
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    screenTitle:{
        fontSize:20,
        textAlign:"center",
        marginVertical:15,
        fontWeight:"bold",
    },
    cardWrapper:{
        backgroundColor:"#d3d3d3",
        marginBottom:15,
    },
});

export default ProductScreen;