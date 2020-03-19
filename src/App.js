import React, { Component } from 'react';
import MainHeader from './components/MainHeader'
import './App.css';
import './styles/main-header.css'



class App extends Component {

    render() {

        return (
            <div className="App">
                <MainHeader stocks={this.stocks}/>
             </div>
        )
    }
}

export default App;
