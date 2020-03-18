import React, { Component } from 'react';
import StockCard from "./StockCard";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom"


class MainHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            search: ''
            // search: ''
        }
    }

    async componentDidMount() {
        // const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${this.state.search}&apikey=HY0JP87WH3PG17X6`

        const response = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${this.state.search}&apikey=HY0JP87WH3PG17X6`)
        // const response = await fetch("https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=BA&apikey=demo");
        const data =  await response.json();
        const dataArr = data.bestMatches;

        console.log(data)
        // this.setState({search: data.bestMatches})
        // console.log(data.bestMatches)
            // .then(res => res.json())
            // .then(
            //     (result) => {
            //         this.setState({
            //             isLoaded: true,
            //             items: result.items
            //         });
            //     },
            //     // Note: it's important to handle errors here
            //     // instead of a catch() block so that we don't swallow
            //     // exceptions from actual bugs in components.
            //     (error) => {
            //         this.setState({
            //             isLoaded: true,
            //             error
            //         });
            //     }
            // )
    };

    updateSearch = (e) => {
        e.preventDefault();
        this.setState({search: e.target.value.substr(0, 20)})
        console.log(this.state.search)
    };


    render() {
        //get rid of filtered stock
        let filteredStock  = this.props.stocks.filter(
            (stock) =>  {
                return stock.name.indexOf(this.state.
                    search) !== -1;
            }
        )
        return (
            <Router>

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
                    <input type="text" value={this.state.search} placeholder="Enter Stock Symbol" onChange={this.updateSearch.bind(this)}/>
                    <Link className="btn btn-full" href="#" >Add Stock</Link>
                    <a className="btn btn-ghost" href="#">Delete</a>
                </div>
                <div className='container'>
                    {/*do map off props.stock not hard coded filter*/}


                    {filteredStock.map(stock => {
                        return <StockCard stock={stock}
                        key={stock.id}/>
                    })}
                </div>

            </React.Fragment>
            </Router>
        )

    }
}
export default MainHeader;