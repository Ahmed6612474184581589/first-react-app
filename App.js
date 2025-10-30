import {statusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from "./screens/MainScreen";
import MenuScreen from "./screens/MenuScreen";
import QuizScreen from "./screens/quizScreen";
import ExcerciseSCreen from "./screens/ExcerciseScreen";
import ButtonScreen from "./screens/ButtonScreen";
import ListScreen from "./screens/ListScreen";
import QuoteScreen from "./screens/QuoteScreen";
import BoxScreen from "./screens/BoxScreen";
import BoxScreenChallenge from "./screens/BoxScreenChallenge";
import AdvancedBox from "./screens/AdvancedBox"; 
import PostsScreen from "./screens/PostsScreen";
import PostsScreenChallenge from "./screens/PostsScreenChallenge";
import StudentsScreen from "./screens/StudentsScreen";
import ProductScreen from "./screens/ProductScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Main">
                <Stack.Screen name="Main" component={MainScreen} />
                <Stack.Screen name="List" component={ListScreen} />
                <Stack.Screen name="Quote" component={QuoteScreen} />
                <Stack.Screen name="Button" component={ButtonScreen} />
                <Stack.Screen name="Menu" component={MenuScreen} />
                <Stack.Screen name="Students" component={StudentsScreen} />
                <Stack.Screen name="Box" component={BoxScreen} />
                <Stack.Screen name="BoxChallenge" component={BoxScreenChallenge} />
                <Stack.Screen name="AdvancedBox" component={AdvancedBox} />
                <Stack.Screen name="Posts" component={PostsScreen} />
                <Stack.Screen name="PostChallenge" component={PostsScreenChallenge} />
                <Stack.Screen name="Countries" component={CountriesScreen} />
                <Stack.Screen name="Product" component={ProductScreen} />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}
