import React from 'react';
import { FontAwesome } from "react-native-vector-icons";
import { Platform, StatusBar } from 'react-native';
import {
  createBottomTabNavigator,
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/home/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import SignInScreen from './screens/login/LoginScreen';


const headerStyle = {
  marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
};


export const SignedOut = createStackNavigator({
  SignIn: {
    screen: SignInScreen,
    navigationOptions: {
      title: "Sign In",
      headerStyle
    }
  }
});

export const SignedIn = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="home" size={30} color={tintColor} />
        )
      }
    },
    Profile: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarLabel: "Profile",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="user" size={30} color={tintColor} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      style: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
      }
    }
  }
);

export default createAppContainer(createSwitchNavigator(
    {
      SignedIn: { screen: SignedIn },
      SignedOut: { screen: SignedOut}
    },
    { initialRouteName: "SignedOut" }
));
