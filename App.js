import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import TestScreen from './src/screens/TestScreen';
import ListScreen from './src/screens/ListScreen';

const navigator=createStackNavigator(
  {
  Test:TestScreen,
  List:ListScreen
},
{
  initialRouteName:"List",
  defaultNavigationOptions:{
    title:"App"
  }
}
);

export default createAppContainer(navigator); 