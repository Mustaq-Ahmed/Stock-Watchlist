import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Watchlist.css'
import '../Home/Home.css'
import { stockDataActions } from '../../store/stockData';

export default function Watchlist() {

  const data = useSelector((state) => state.stockData.stockDataList);
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(stockDataActions.removeFromWatchlist({ id: id }))
    alert("Deleted from Watchlist")
  }

  return (
    <main className='watchlist-container'>
      <h2 className='heading'>Watchlist Stock Data</h2>
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
          data.length === 0 || typeof (list) === 'string' ? "" :
            data.map((stockData, i) => {
              return (
                <tbody className='tbody' key={Math.random().toString()}>
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{stockData['1. symbol']}</td>
                    <td>{stockData['2. name']}</td>
                    <td>{stockData['4. region']}</td>
                    <td>{stockData['9. matchScore']}</td>
                    <td><button className='deleteBtn' onClick={() => deleteHandler(stockData.id)}>Delete</button></td>
                  </tr>
                </tbody>
              )
            })
        }
      </table>
    </main>
  )
}
