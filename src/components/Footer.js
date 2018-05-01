import React, {Component} from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const styles = {

    viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    },

    textStyle: {
        fontSize: 25
    }
};

class Footer extends Component {
    render() {
        const { textStyle, viewStyle } = styles;

        return (
            <View style={viewStyle}>
                <Icon name = "home" style={textStyle}/>
                <Icon name = "search" style={textStyle}/>
                <Icon name = "plus-square" style={textStyle}/>
                <Icon name = "heart" style={textStyle}/>
                <Icon name = "user" style={textStyle}/>
            </View>
        )
    }
}

export default Footer;