import React from 'react';
import '../styles/card.css';

const StockCard = (props) => {
    console.log('stock', props.stock)

    return(
        <div className="stock-card-parent">
            <div className="percent">
                <div> {props.stock.symbol}</div>

            </div>

            <div className="stock-card">

                <div> {props.stock.symbol}</div>
             </div>
        </div>
    )
}

export default StockCard;