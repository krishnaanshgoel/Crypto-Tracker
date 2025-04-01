import axios from "axios";

export const get100coins =  () => {
    const mycoins=axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
    .then((res)=>{
        return res.data;
    }).catch((err)=>{
      console.log(err)
    })
    return mycoins;
}