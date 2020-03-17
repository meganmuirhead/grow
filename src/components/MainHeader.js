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
            username: 'megan',
            search: ''
            // search: ''
        }
    }

    updateSearch = (e) => {
        e.preventDefault();
        this.setState({search: e.target.value.substr(0, 20)})
        console.log(this.state.search)
    }


    render() {
        let filteredStock  = this.props.stocks.filter(
            (stock) =>  {
                //if you can't find this.state
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
                    <a className="btn btn-ghost" href="#">Show Me More</a>
                </div>
                <div className='container'>
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