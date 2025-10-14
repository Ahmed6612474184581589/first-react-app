import react from "react";
import {Text, View, StyleSheet, Image, FlatList} from "react-native";

const ProfileInfo = () => {
    return(
    <View>
        /*slika čovjeka u pozadini */
        <View>
            <Image source={require("covjek.png")} />
        </View>

        /* ProfileInfo*/
        <View>
            <Text style={styles.johndoe}>JOHN DOE</Text>
            <Text style={styles.text}>UI/UX Designer, We're passionate about creating beautiful design for startups and leading brands</Text>
            <Button style={styles.btn}> HIRE HIM </Button>
        </View>

        /* projects */
        <View>
            <Text style={styles.pjTextL}>PROJECTS</Text>
            <Button style={styles.viewall}>View All</Button>
        </View>

    </View>
    )
}


const styles = StyleSheet.create({
    johndoe: {
        textAlign: 'center',
        fontSize: 35,
        marginBottom:50,
    },
    text:{
        textAlign:"center",
        fontSize:20,
    },
    btn:{
        backgroundColor:"#e3c70e",
        padding:10,
        borderRadius:5,
    },
    pjTextL:{
        textAlign:"left",
        fontSize:25,
        marginTop:20,
    },
    viewall:{
        textAlign:"right",
        fontSize:18,
        color:"#e3c70e"
    },
});

export default ProfileInfo;