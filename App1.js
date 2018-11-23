import React ,{ Component } from 'react';
import { View, Text, Button,AppRegistry,Platform,Dimensions} from 'react-native';
// import {createDrawerNavigator,createAppContainer,DrawerItems} from 'react-navigation'; // Version can be specified in package.json
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
const width= Dimensions.get('window').width;
const height=Dimensions.get('window').height;
import { DrawerActions,DrawerItems } from 'react-navigation';

import {createStackNavigator, createDrawerNavigator, createMaterialTopTabNavigator,createNavigationContainer,createAppContainer,DrawerNavigator} from 'react-navigation';


const DrawerScreen = createDrawerNavigator({
    Home:HomeScreen,
    Details:DetailsScreen,
},{
    drawerWidth:width-120,
    drawerPosition:'left',
    mode:Platform.OS ==='ios'? 'modal':'card',
    drawerType:'front',
    useNativeAnimations:true,
    initialRouteName:'Home',
    drawerOpenRoute:'DrawerOpen',
    drawerCloseRoute:'DrawerClose',
    navigationOptions:{
        gesturesEnabled:false
    }
})

export default createAppContainer(DrawerScreen);











// const Tabs = createMaterialTopTabNavigator({
//     Home: HomeScreen,
//     About: DetailsScreen,
// },{
    
//     tabBarOptions: {
//         activeTintColor: '#000',
//         inactiveTintColor: 'gray',
//         style: {
//             backgroundColor: '#fff',
//         },
//         indicatorStyle: {
//             backgroundColor: '#000',
//         },
//     }
// });

// const DrawerNavigator = createDrawerNavigator({
//     Home:{
//         screen: Tabs
//     }
// },{
//     initialRouteName: 'Home',
//     contentComponent:(props) =><Text> Home</Text>,
//     drawerWidth: 300
// });

// // const MenuImage = ({navigation}) => {
// //     if(!navigation.state.isDrawerOpen){
// //         return <Image source={require('../images/menu-button.png')}/>
// //     }else{
// //         return <Image source={require('../images/left-arrow.png')}/>
// //     }
// // }

// const StackNavigator = createStackNavigator({
    
//     //important: key and screen name (i.e. DrawerNavigator) should be same while using the drawer navigator inside stack navigator.
    
//     DrawerNavigator:{
//         screen: DrawerNavigator
//     }
// },);
// export default createNavigationContainer(StackNavigator);