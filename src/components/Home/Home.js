import React, { useState, useEffect } from 'react'
import './Home.css'
import { AiOutlinePlusSquare } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { stockDataActions } from '../../store/stockData';

export default function Home() {
    const [inp, setInp] = useState("ibm")
    const [list, setList] = useState([]);

    const dispatch = useDispatch();

    const changeHandler = (e) => {
        setInp(e.target.value);
    }

    const API_KEY = 'IUZF39FR2E12U6W4';
    const API_CALL = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${inp ? inp : "ibm"}&apikey=${API_KEY}`;


    useEffect(() => {
        fetch(API_CALL)
            .then(function (response) {
                if (!response.ok) {
                    const error = new Error("Data Not Found!!!");
                    return error;
                }
                return response.json();
            })
            .then(function (data) {
                setList((data['bestMatches'] ? data['bestMatches'] : " "));
                console.log(data['bestMatches']);
                // console.log(data);
                return data['bestMatches'] ? data['bestMatches'] : " ";
            })
            .catch(function (error) {
                console.log(error.message);
            })
    }, [API_CALL])

    const addToCartHandler = (data) => {
        dispatch(stockDataActions.addToWatchlist(data))
        alert("Added to Watchlist")
        // console.log("BUTTON");
    }

    return (
        < main className='home-container' >
            <h2 className='home-heading'>Search for Company or Symbol</h2>
            <div className='search' >
                <input value={inp} type="text" placeholder='Search Company Symbol' onChange={changeHandler} />
            </div>
            <table className='table-container'>
                <thead className='thead'>
                    <tr>
                        <th>S/NO</th>
                        <th>Company Symbol</th>
                        <th>Company Name</th>
                        <th>Region</th>
                        <th>Match Score</th>
                    </tr>
                </thead>
                {
                    list.length === 0 || typeof (list) === 'string' ? "" :
                        list.map((stockData, i) => {
                            return (
                                <tbody className='tbody' key={Math.random().toString()}>
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{stockData['1. symbol']}</td>
                                        <td>{stockData['2. name']}</td>
                                        <td>{stockData['4. region']}</td>
                                        <td>{stockData['9. matchScore']}</td>
                                        <td><button className='addBtn' onClick={() => addToCartHandler(stockData)}><AiOutlinePlusSquare /></button></td>
                                    </tr>
                                </tbody>
                            )
                        })
                }
            </table>
        </ main>

    )
}
