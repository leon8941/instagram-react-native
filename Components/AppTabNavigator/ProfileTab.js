import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import { Icon, Container, Content, Header, Left, Right, Body, Button } from 'native-base';
import EntypoIcon from 'react-native-vector-icons/Entypo'

class ProfileTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-person" style={{ color: tintColor }} />
        )
    };

    render(){
        return (
            <Container style={{ flex: 1, backgroundColor: "white" }}>
                <Header>
                    <Left>
                        <Icon name="md-person-add" style={{ paddingLeft: 10 }}></Icon>
                    </Left>
                    <Body>
                        <Text>Instagram</Text>
                    </Body>
                    <Right>
                        <EntypoIcon name="back-in-time" style={{ paddingLeft: 10, fontSize: 30 }} ></EntypoIcon>
                    </Right>
                </Header>
                <Content>
                    <View style={{ paddingTop: 10 }}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ flex: 1, alignItems: "center" }}>
                                <Image source={require("../../assets/cat.jpg")}
                                    style={{ width: 75, height: 75, borderRadius: 37.5 }}
                                    />
                            </View>
                            <View style={{ flex: 3 }}>
                                <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                                    <View style={{ alignItems: "center" }}>
                                        <Text>20</Text>
                                        <Text style={{ fontSize: 10, color: "grey" }}>posts</Text>
                                    </View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text>309</Text>
                                        <Text style={{ fontSize: 10, color: "grey" }}>followers</Text>
                                    </View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text>233</Text>
                                        <Text style={{ fontSize: 10, color: "grey" }}>following</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row" , paddingTop: 10 }}>
                                    <Button bordered dark style={{ flex: 3, marginLeft: 10, justifyContent: "center", height: 30 }}>
                                        <Text>Edit Profile</Text>
                                    </Button>
                                    <Button bordered dark style={{ flex: 1, marginLeft: 5, marginRight: 10, justifyContent: "center", height: 30 }}>
                                        <Icon name="settings"></Icon>
                                    </Button>
                                </View>
                            </View>
                        </View>

                        <View style={{ paddingVertical: 10, paddingHorizontal: 10 }}>
                            <Text style={{ fontWeight: "bold" }}>Leon Miew</Text>
                            <Text>Full Stack Software Developer</Text>
                            <Text>www.leoncat.com</Text>
                        </View>
                    </View>
                </Content>
            </Container>
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
