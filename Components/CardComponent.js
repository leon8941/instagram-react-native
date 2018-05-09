import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

import { 
    Card, 
    CardItem, 
    Thumbnail, 
    Body, 
    Left, 
    Right, 
    Button, 
    Icon 
} from 'native-base'

class CardComponent extends Component {
    render(){
        const images = {
            "1" : require("../assets/1.jpg"),
            "2" : require("../assets/2.jpg"), 
            "3" : require("../assets/3.jpg")
        }

        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={require('../assets/cat.jpg')} />
                        <Body>
                            <Text>Teck Onn</Text>
                            <Text note>Oct 8, 1990</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={images[this.props.imageSource]} style={{
                        height: 200, width: null, flex: 1
                    }}/>
                </CardItem>
                <CardItem style={{ height: 45 }}>
                    <Left>
                        <Button transparent>
                            <Icon name="ios-heart-outline" style={{color: 'black'}} />
                        </Button>
                        <Button transparent>
                            <Icon name="ios-chatbubbles-outline" style={{color: 'black'}} />
                        </Button>
                        <Button transparent>
                            <Icon name="ios-send-outline" style={{color: 'black'}} />
                        </Button>
                    </Left>
                </CardItem>
                <CardItem >
                    <Text>
                        this.props.likes
                    </Text>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>
                            <Text style={{fontWeight: '900'}}>
                                Leon Cat 
                            </Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus nisl, gravida non elit ac, faucibus finibus lectus. Proin viverra est ut orci bibendum, iaculis venenatis nisi laoreet. Vivamus sed.
                        </Text>
                    </Body>
                </CardItem>
            </Card>
        )
    }
}

export default CardComponent;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center",
        justifyContent: "center"
    }
})
