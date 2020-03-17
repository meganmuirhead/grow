import React, { Component } from 'react';
import MainHeader from './components/MainHeader'
// import MainSection from './components/MainSection'
import './App.css';
import './styles/main-header.css'



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // username: 'megan',
            // search: ''
            // search: ''
        }
    }

    stocks = [{
        id: 1,
        name: 'yahoo',
        stockName: 'yhoo'
    }, {
        id: 2,
        name: 'tesla',
        stockName: 'tsla'

    }, {
        id: 3,
        name: 'google',
        stockName: 'goog'

    }, {
        id: 4,
        name: 'apple',
        stockName: 'aapl'

    },
        {
            id: 5,
            name: 'groupon',
            stockName: 'gpn'

        },
        {
            id: 7,
            name: 'sugar',
            stockName: 'sug'

        }]
    render() {

        return (
            <div className="App">
                <MainHeader stocks={this.stocks}/>
            {/*<MainSection  />*/}
             </div>
        )
    }
}

export default App;
