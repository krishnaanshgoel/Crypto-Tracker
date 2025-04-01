import React, { useState ,useEffect} from 'react'
import Header from '../components/common/Header'
import Tabscomponent from '../components/Dashboard/Tabs'
import axios from 'axios';
import Search from '../components/Dashboard/Search';
import PaginationC from '../components/Dashboard/Pagination';
import Loader from '../components/common/Loader';
import BacktoTop from '../components/common/BacktoTop';
import { get100coins } from '../functions/get100coins';

function Dashboard() {
  const [coins,setCoins]=useState([]);
  const [search,setSearch]=useState("");
  const [page, setPage] = useState(1);
  const [paginatedcoins,setPaginatedCoins]=useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
   getData();
  },[]);

  const getData=async()=>{
    const myCoins=await get100coins();
    setCoins(myCoins);
    setPaginatedCoins(myCoins.slice(0,10));
    setLoading(false);
  }
  const handleChange = (event, value) => {
    setPage(value);
    var pre=(value-1)*10;
    setPaginatedCoins(coins.slice(pre,pre+10));
  };

  const onSearchChange=(e)=>{
    setSearch(e.target.value)
  }

  var filteredCoins=coins.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()) || item.symbol.toLowerCase().includes(search.toLowerCase()));
  
  return (
    <>
    <Header />
    <BacktoTop />
    {loading?<Loader />:<div>
      
      <Search search={search} onSearchChange={onSearchChange} />
      <Tabscomponent coins={search?filteredCoins:paginatedcoins}  setSearch={setSearch}/>
      {!search && <PaginationC page={page} handleChange={handleChange}/>}
    </div>}
    </>
  )
}

export default Dashboard
