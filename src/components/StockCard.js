import React from 'react';
import '../styles/card.css';

const StockCard = (props) => {

    return(
        <div className="stock-card-parent">
            <div className="percent">
                bleh
            </div>

            <div className="stock-card">

                <div> {props.stock.name}</div>
                <div> {props.stock.stockName}</div>
             </div>
        </div>
    )
}

export default StockCard;