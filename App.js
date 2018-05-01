import React, {Component} from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
import Footer from './src/components/Footer';

class App extends Component {

    render() {
        return(
            <View style = {{flex:1}}>
                <Header/>
                <AlbumList />
                <Footer/>
            </View>
        )
    }

}

export default App;



