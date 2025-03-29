import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom";
import Header from '../components/common/Header';
import Loader from '../components/common/Loader';
import axios from 'axios';
import { coinObject } from '../functions/convertObject';
import List from '../components/Dashboard/List';
import CoinInfo from '../components/Coin/CoinInfo';
function Coin() {
  const {id}=useParams();
  const [loading, setLoading] = useState(true);
  const [coindata,setCoindata]=useState({});
  useEffect(()=>{
  if(id){
    axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then((res)=>{
      coinObject(setCoindata,res.data);
      setLoading(false);
    }).catch((err)=>{
      console.log(err)
      setLoading(false);
    })}
  },[id]);
  return (
    <div>
    <Header />
      {loading?<Loader />:
        (<><div className="grey-wrapper"><List coin={coindata} /></div>
          <CoinInfo heading={coindata.name} desc={coindata.desc} /></>
        )}
    </div>
  )
}

export default Coin
