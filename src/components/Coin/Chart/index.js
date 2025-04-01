import React from 'react'
import "./style.css"
import {Line} from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';
import { convertnumber } from '../../../functions/convertnumber';

function LineChart({chartData,pricetype,multiAxis}) {
  const options={
    plugins:{
      legend:{
        display:multiAxis?true:false,
      },
    },
    responsive:true,
    interaction:{
      mode:'index',
      intersect:false,
    },
    scales:{
      crypto1:{
        type:"linear",
        display:true,
        position:"left",
        ticks:{
          callback:function(value,index,ticks){
            if (pricetype === "prices") {
              return "$"+value.toLocaleString();
            } else if (pricetype === "market_caps") {
              return "$"+convertnumber(value);
            } else {
              return convertnumber(value);
            } 
          }
        }
      },
      crypto2:{
        type:"linear",
        display:multiAxis,
        position:"right",
        ticks:{
          callback:function(value,index,ticks){
            if (pricetype === "prices") {
              return "$"+value.toLocaleString();
            } else if (pricetype === "market_caps") {
              return "$"+convertnumber(value);
            } else {
              return convertnumber(value);
            } 
          }
        }
      }
    }
};
  return (
    <Line data={chartData} options={options} />
  )
}

export default LineChart
