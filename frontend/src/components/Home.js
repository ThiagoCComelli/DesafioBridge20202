import React,{useState} from 'react';
import HistoryItem from './HistoryItem'
import {api} from '../utils/api'

import '../styles/Home.css'

const Home = () => {
    const [historyItems, setHistoryItems] = useState([]);
    const [number,setNumber] = useState(null)

    const sendFactorial = async () => {
        const result = await api.requestFactorial(number)

        setHistoryItems([...historyItems,result])
    }

    return (
        <>
            <div className="mainHome">
                <div className="mainHomeContents">
                    <div className="homeCalculateBox">
                        <input onChange={(e) => {setNumber(e.target.value)}} placeholder="Write your number.." type="number"></input>
                        <div className="homeCalculateBoxInputBttns">
                            <button onClick={() => {sendFactorial()}}>Calculate</button>
                            <button>Clear input</button>
                        </div>
                    </div>
                    <div className="homeCalculateHistory">
                        {historyItems.map((itemHistory) => {
                            return <HistoryItem key={itemHistory.id} props={itemHistory}/>
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
