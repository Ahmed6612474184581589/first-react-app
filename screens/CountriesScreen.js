import react from "react";
import {View,Text,StyleSheet,FlatList} from "react-native";
import data from "../data/countries.json";

class CountriesScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            countries: [],
        };
    }
    componentDidMount(){
        this.setState({
            countries: data,
        });
    }
    render(){
        return(
            <View>
                <Text style={styles.screenTitle}>Countries Screen</Text>
                <FlatList>
                    data={this.state.countries}
                    keyExtractor={country => country.id}
                    renderItem={({item}) => (
                        <View>
                            <Text style={styles.cardWrapper}>City name: {item.name}</Text>
                            <Text style={styles.cardWrapper}>Country name: {item.country}</Text>
                            <Text style={styles.cardWrapper}>City description: {item.description}</Text>
                            <Text style={styles.cardWrapper}>City population: {item.population}</Text>
                        </View>
                    )}
                </FlatList>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    countryStyle:{
        fontWeight:"bold",
    },
    cardWrapper:{
        backgroundColor:"#d3d3d3",
        marginBottom:15,
    },
    screenTitle:{
        fontSize:20,
        textAlign:"center",
        marginVertical:15,
        fontWeight:"bold",
    },
});

export default CountriesScreen;