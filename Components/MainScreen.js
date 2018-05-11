import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Platform
} from 'react-native';

import { TabNavigator } from 'react-navigation';
import { Icon } from 'native-base';

import HomeTab from "./AppTabNavigator/HomeTab";
import AddMediaTab from "./AppTabNavigator/AddMediaTab";
import LikesTab from "./AppTabNavigator/LikesTab";
import ProfileTab from "./AppTabNavigator/ProfileTab";
import SearchTab from "./AppTabNavigator/SearchTab";

class MainScreen extends Component {
    
    static navigationOptions = {
        header: null
    }

    render(){
        return (
            <AppTabNavigator />
        )
    }
}

export default MainScreen;

const AppTabNavigator = TabNavigator(
    {
        HomeTab: {
            screen: HomeTab
        },
        SearchTab: {
            screen: SearchTab
        },
        AddMediaTab: {
            screen: AddMediaTab
        },
        LikesTab: {
            screen: LikesTab
        },
        ProfileTab: {
            screen: ProfileTab
        },
    },
    {
        animationEnabled: true,
        swipeEnabled: false,
        tabBarPosition: "bottom",
        tabBarOptions: {
            style: {
                ...Platform.select({
                    android: {
                        background: "white"
                    }
                })
            },
            activeTintColor: "black",
            inactiveTintColor: "grey",
            showLabel: false,
            showIcon: true
        }
    }
);

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center",
        justifyContent: "center"
    }
})
