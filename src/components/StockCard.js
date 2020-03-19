import React from 'react';
import '../styles/card.css';

const StockCard = (props) => {
    console.log('stock', props.stock)

    return(
        <div className="stock-card-parent">
            <div className="percent">
                <div> {props.stock['01. symbol']}</div>

            </div>

            <div className="stock-card">

                <div> {props.stock['02. open']}</div>
            </div>
        </div>
    )
}

export default StockCard;