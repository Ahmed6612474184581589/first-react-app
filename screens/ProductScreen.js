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
            <View>
                <Text style={styles.screenTitle}>Product screen</Text>
                data={this.state.products}
                keyExtractor={product => product.id}
                renderItem{({item}) => (
                    <View>
                        <Text style={styles.cardWrapper}>Name: {item.name}</Text>
                        <Text style={styles.cardWrapper}>Category: {item.category}</Text>
                        <Text style={styles.cardWrapper}>Price: {item.price}</Text>
                        <Text style={styles.cardWrapper}>Stock: {item.stock}</Text>
                        <Image source={require("../data/products.json" + item.image)} />
                        <Text style={styles.cardWrapper}>Description: {item.description}</Text>
                    </View>
                )}
            </View>
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