import React from 'react'
import "./style.css"
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Tooltip } from '@mui/material';
import { convertnumber } from '../../../functions/convertnumber';

function List({coin,key}) {
  return (
     <tr className="list-row">
        <Tooltip title="Coin Logo" placement='bottom-start'>
        <td className="td-img">
            <img src={coin.image} className="coin-logo"></img>
            </td>
            </Tooltip>
            <Tooltip title="Coin-Info" placement='bottom-start'>
            <td>
            <div className="name-col">
                <p className="coin-symbol">{coin.symbol}</p>
                <p className="coin-name">{coin.name}</p>
            </div>
        </td>
        </Tooltip>
        <Tooltip title="Price change in 24h" placement='bottom-start'>
        {coin.price_change_percentage_24h>=0?
        (<td className="chip-flex">
            <div className="price-chip">{coin.price_change_percentage_24h.toFixed(2)}%</div>
            <div className="icon-chip td-icon"><TrendingUpRoundedIcon /></div>
        </td>):
        (<td className="chip-flex">
            <div className="price-chip chip-red">{coin.price_change_percentage_24h.toFixed(2)}%</div>
            <div className="icon-chip chip-red td-icon"><TrendingDownRoundedIcon /></div>
        </td>)}
        </Tooltip>
        <Tooltip title="Current Price" placement='bottom-start'>
        <td>
            <h3 className="coin-price td-center-align" style={{color:coin.price_change_percentage_24h<0?"var(--red)":"var(--green)"}}>${coin.current_price.toLocaleString()}</h3>
            </td>
            </Tooltip>
            <Tooltip title="Total Volume" placement='bottom-end'>
            <td>
            <p className="total_volume td-right-align td-total-volume">{coin.total_volume.toLocaleString()}</p>
            </td>
            </Tooltip>
            <Tooltip title="Market Cap" placement='bottom-end'> 
            <td className="desktop-mkt-td">
            <p className="total_volume td-right-align">${coin.market_cap.toLocaleString()}</p>
        </td>
        </Tooltip>
        <Tooltip title="Market Cap" placement='bottom-end'> 
            <td className="mobile-mkt-td">
            <p className="total_volume td-right-align">${convertnumber(coin.market_cap)}</p>
        </td>
        </Tooltip>
     </tr>
  )
}

export default List

