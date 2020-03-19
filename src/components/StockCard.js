import React from 'react';
import '../styles/card.css';

const StockCard = (props) => {
    console.log('stock', props.stock)

    return(
        <div className="stock-card-parent"  onClick={props.onClickDelete}>
            <div className="percent">
                <div className="padding"> High: {props.stock['03. high']}</div>
                <div className="padding"> Low: {props.stock['04. low']}</div>
            </div>

            <div className="stock-card">

                <div className="card-flex"> {props.stock['01. symbol']}</div>
                <div className="card-flex">
                    <div className="padding"> Price: {props.stock['05. price']}</div>
                    <div className="padding"> Change:{props.stock['09. change']}</div>
                    <div className="padding"> Percent Change:{props.stock['10. change percent']}</div>
                </div>
                <div className="card-flex ">
                    <div className="padding"> Open: {props.stock['02. open']}</div>
                    <div className="padding"> High: {props.stock['03. high']}</div>
                    <div className="padding"> Low: {props.stock['04. low']}</div>
                </div>
            </div>
        </div>
    )
}

export default StockCard;