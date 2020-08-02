import React from 'react';  
import {createAppContainer} from 'react-navigation';  
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';  
import HomeScreen from "../screens/index";  
import ProfileScreen from "../screens/profile";  
import SettingScreen from "../screens/settings";  
import Icon from 'react-native-vector-icons/FontAwesome'; 

const AppNavigator = createMaterialTopTabNavigator(  
    {  
        Home: {
            screen: HomeScreen,
            navigationOptions: {
              tabBarIcon: ({ tintColor }) => (
                //Your icon component for example => 
                <Icon name="home" size={30} color="#900" />
              )
            },
          },   
        Profile: {
            screen: ProfileScreen,
            navigationOptions: {
              tabBarIcon: ({ tintColor }) => (
                //Your icon component for example => 
                <Icon name="home" size={30} color="#900" />
              )
            },
          },
        Settings: {
            screen: SettingScreen,
            navigationOptions: {
              tabBarIcon: ({ tintColor }) => (
                //Your icon component for example => 
                <Icon name="home" size={30} color="#900" />
              )
            },
          } 
    },  
    {
        tabBarPosition: 'top',
        swipeEnabled: true,
        animationEnabled: true,
        tabBarOptions: {
        
         showIcon: true,
          activeTintColor: '#FFFFFF',
          inactiveTintColor: '#F8F8F8',
          style: {
            backgroundColor: '#633689',
          },
          labelStyle: {
            textAlign: 'center',
          },
          indicatorStyle: {
            borderBottomColor: '#87B56A',
            borderBottomWidth: 2,
          },
        },
    }
)  
export default createAppContainer(AppNavigator);  