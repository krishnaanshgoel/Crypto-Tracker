import React, { useEffect, useState } from "react";
import Button from "../components/common/Button";
import Header from "../components/common/Header";
import TabsComponent from "../components/Dashboard/Tabs";
import { get100coins } from "../functions/get100coins";
import { Link } from "react-router-dom";

function Watchlist() {
  const watchlist = JSON.parse(localStorage.getItem("watchlist"));
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    if (watchlist) {
      getData();
    }
  }, []);

  const getData = async () => {
    const allCoins = await get100coins();
    if (allCoins) {
      setCoins(allCoins.filter((coin) => watchlist.includes(coin.id)));
    }
  };

  return (
    <div>
      <Header />
      {watchlist?.length > 0 ? (
        <TabsComponent coins={coins} />
      ) : (
        <div>
          <h1 style={{ textAlign: "center" }}>
            Sorry, No Items In The Watchlist.
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "2rem",
            }}
          >
            <Link to={"/dashboard"}>
              <Button text="Dashboard" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Watchlist;