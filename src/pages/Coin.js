import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom";
import Header from '../components/common/Header';
import Loader from '../components/common/Loader';
import axios from 'axios';
import { coinObject } from '../functions/convertObject';
import List from '../components/Dashboard/List';
import CoinInfo from '../components/Coin/CoinInfo';
import { getCoinData } from '../functions/getCoinData';
import { getCoinPrices } from '../functions/getCoinPrices';
import { Line } from 'react-chartjs-2';
import Chart from '../components/Coin/Chart';
import LineChart from '../components/Coin/Chart';
import { convertDate } from '../functions/convertDate';
import SelectDays from '../components/Coin/SelectDays';
import { settingChartData } from '../functions/settingChartData';
import PriceType from '../components/Coin/PriceType';
function Coin() {
  const {id}=useParams();
  const [loading, setLoading] = useState(true);
  const [coindata,setCoindata]=useState({});
  const [days,setDays]=useState(30);
  const [chartData,setChartData]=useState({});
  const [pricetype, setPriceType] = useState("prices");
  useEffect(()=>{
  if(id){
   getData();
  }
  },[id]);

  async function getData(){
    const data=await getCoinData(id);
    if(data){
      coinObject(data,setCoindata);
      const prices=await getCoinPrices(id,days,pricetype);
      if(prices.length>0){
        settingChartData(setChartData,prices);
      setLoading(false);
      }
    }
  }
  const handleDays = async (event) => {
    setLoading(true);
    setDays(event.target.value);
    const prices=await getCoinPrices(id,event.target.value,pricetype);
    if(prices.length>0){
      settingChartData(setChartData,prices);
      setLoading(false);
    }
  };

  const handlePriceTypeChange =async  (event, newType) => {
    setLoading(true);
    setPriceType(newType);
    const prices=await getCoinPrices(id,days,newType);
    if(prices.length>0){
      settingChartData(setChartData,prices);
      setLoading(false);
    }
  };
  return (
    <div>
    <Header />
      {loading?<Loader />:
        (<><div className="grey-wrapper" style={{padding:"0rem 1rem"}}><List coin={coindata} /></div>
        <div className="grey-wrapper">
          <SelectDays days={days} handleDays={handleDays}/>
          <PriceType pricetype={pricetype} handlePriceTypeChange={handlePriceTypeChange}/>
          <LineChart chartData={chartData} pricetype={pricetype} multiAxis={false}/>
          </div>
          <CoinInfo heading={coindata.name} desc={coindata.desc} /></>
        )}
    </div>
  )
}

export default Coin
