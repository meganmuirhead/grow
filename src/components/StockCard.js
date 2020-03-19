import React from 'react';
import '../styles/card.css';

const StockCard = (props) => {
    console.log('stock', props.stock)

    return(
        <div className="stock-card-parent"  onClick={props.onClickDelete}>>
            <div className="percent">
                <div> {props.stock['01. symbol']}</div>

            </div>

            <div className="stock-card">

                <div> {props.stock['01. symbol']}</div>
                <div className="card-flex">
                    <div> Price: {props.stock['05. price']}</div>
                    <div> {props.stock['09. change']}</div>
                    <div> {props.stock['10. change percent']}</div>
                </div>
                <div className="card-flex">
                    <div> Open: {props.stock['02. open']}</div>
                    <div> High: {props.stock['03. high']}</div>
                    <div> Low: {props.stock['04. low']}</div>
                </div>
            </div>
        </div>
    )
}

export default StockCard;