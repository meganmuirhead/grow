import React, { Component } from 'react';
import StockCard from "./StockCard";



class MainHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: null,
        }
    }



    fetchStocks = (e) => {
        console.log(1, e)
            this.setState({search: e.target.value.substr(0, 20)})
            if (!this.state.search) {
                return;
            }
        console.log(2, this.state.search)
        fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${this.state.search}&apikey=HY0JP87WH3PG17X6`)
            .then(res => res.json())
            .then(data => {
                this.setState({setSearch: data});
                console.log(this.state.setSearch)
            })
    }

    render() {
        //get rid of filtered stock
        // let filteredStock  = this.props.stocks.filter(
        //     (stock) =>  {
        //         return stock.name.indexOf(this.state.
        //             search) !== -1;
        //     }
        // )
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
                    <input type="text"  placeholder="Enter Stock Symbol" />
                    <button className="btn btn-full" onClick={this.fetchStocks.bind(this)}>Add Stock</button>
                    <button className="btn btn-ghost" >Delete</button>
                </div>
                <div className='container'>
                    {/*do map off props.stock not hard coded filter*/}


                    {/*{filteredStock.map(stock => {*/}
                        {/*return <StockCard stock={stock}*/}
                        {/*key={stock.id}/>*/}
                    {/*})}*/}
                </div>

            </React.Fragment>
        )

    }
}
export default MainHeader;