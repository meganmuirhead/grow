import React, { Component } from 'react';
import StockCard from "./StockCard";



class MainHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: null,
        }
    }

    stocks = [];

    storeInput = (e) => {
        e.preventDefault();
        this.setState({search: e.target.value.substr(0, 20)})
        if (!this.state.search) {
            return;
        }
        console.log(2, this.state.search)

    }
    fetchStocks = (e) => {
        e.preventDefault();
        fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${this.state.search}&apikey=HY0JP87WH3PG17X6`)
            .then(res => res.json())
            .then(data => {
                this.setState({setSearch: data});
                console.log(2, data)

                this.stocks.push(data);


            })
    }

    render() {

        return (
            <React.Fragment>
                <nav className='header'>
                    <div className="content">
                        <ul className="main-nav">
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">How it Works</a></li>
                            <li><a href="#">Free Stock</a></li>
                            <li><a href="#">Sign Up</a></li>
                        </ul>
                    </div>
                </nav>
                <div className="stock-text-box">
                    <h1>Stock Watcher</h1>
                    <input type="text"  placeholder="Enter Stock Symbol" onChange={this.storeInput.bind(this)}/>
                    <button className="btn btn-full" onClick={this.fetchStocks.bind(this)}>Add Stock</button>
                    <button className="btn btn-ghost" >Delete</button>
                </div>
                <div className='container'>


                    {this.stocks.map(stock => {
                        return <StockCard stock={stock}/>
                    })}
                </div>

            </React.Fragment>
        )

    }
}
export default MainHeader;