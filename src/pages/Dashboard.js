import React, { useState ,useEffect} from 'react'
import Header from '../components/common/Header'
import Tabscomponent from '../components/Dashboard/Tabs'
import axios from 'axios';

function Dashboard() {
  const [coins,setCoins]=useState([]);
  useEffect(()=>{
     axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
     .then((res)=>{
      setCoins(res.data);
     }).catch((err)=>{
      console.log(err)

     })
  },[]);
  
  return (
    <div>
      <Header />
      <Tabscomponent coins={coins}/>
    </div>
  )
}

export default Dashboard
