import React from 'react';

import '../styles/HistoryItem.css'

const HistoryItem = ({props}) => {
    return (
        <>
            <div className="mainHistoryItem">
                <p>{props.number}! =</p>
                <span>{props.factorial.toExponential()}</span>
            </div>
        </>
    )
}

export default HistoryItem;
