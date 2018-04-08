import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { Icon } from 'native-base';

class ProfileTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-person" style={{ color: tintColor }} />
        )
    };

    render(){
        return (
            <View style={styles.container}>
                <Text>
                    Profile Tab
                </Text>
            </View>
        )
    }
}

export default ProfileTab;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center",
        justifyContent: "center"
    }
})
