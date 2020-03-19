import React, { Component } from 'react';
import StockCard from "./StockCard";



class MainHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            stocks: []
        }
    }


    storeInput = (e) => {
        e.preventDefault();
        this.setState({search: e.target.value.substr(0, 20)})


    }

    onClickDelete = (index) => {
        console.log('click d')
        let box = this.state.search.split('');
        box.splice(index, 1)
        let newText = box.join('');
        this.setState({search: newText})
    }

    fetchStocks = (e) => {
        e.preventDefault();
        if (!this.state.search) {
            return;
        }
        fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${this.state.search}&apikey=HY0JP87WH3PG17X6`)
            .then(res => res.json())
            .then(data => {
                this.setState({setSearch: data, stocks: [...this.state.stocks, data['Global Quote']]});
                // console.log('data: ', JSON.stringify(data['Global Quote']));

                this.state.stocks.push(data);


            })
    }

    render() {

        return (
            <React.Fragment>
                <div className="stock-text-box">
                    <h1>Stock Watcher Dashboard</h1>
                    <input type="text"  placeholder="Enter Stock Symbol" onChange={this.storeInput.bind(this)}/>
                    <button className="btn btn-full" onClick={this.fetchStocks.bind(this)}>Add Stock</button>
                    {/*<button className="btn btn-ghost" onClickDelete={() => this.onClickDelete(index)}>Delete</button>*/}
                </div>
                <div className='container'>


                    {this.state.stocks.map((stock, index)=> {
                        if (!stock) {return;}
                        return <StockCard stock={stock}
                                          key={index}
                                          onClickDelete={() => this.onClickDelete(index)}/>

                    })}
                </div>

            </React.Fragment>
        )

    }
}
export default MainHeader;