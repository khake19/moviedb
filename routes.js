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
import WatchListScreen from './screens/watchlist/WatchListScreen';
import SignInScreen from './screens/login/LoginScreen';


export const SignedOut = createStackNavigator({
  SignIn: {
    screen: SignInScreen,
    navigationOptions: {
      header: null
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
      screen: WatchListScreen,
      navigationOptions: {
        tabBarLabel: "Watch List",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="user" size={30} color={tintColor} />
        )
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
