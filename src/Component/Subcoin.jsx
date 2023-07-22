import Loader from "./Loader";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AlertLine from "./AlertLine";
import { Link } from "react-router-dom";
import ErrorCompoent from "./ErrorCompoent";
function Subcoin() {
  const [sub, setSubcoin] = useState([]);
  const [loadingSubcoin, setloadingSubcoin] = useState(true);
  const [error, seterrorSubcoin] = useState(false);

  useEffect(() => {
    try {
      const fetchCoins = async () => {
        const { data } = await axios.get(
          "https://api.blockchain.com/v3/exchange/tickers "
        );

        setSubcoin(data);
        setloadingSubcoin(false);
      };

      fetchCoins();
    } catch (error) {
      seterrorSubcoin(true);
      setloadingSubcoin(false);
    }
  });

  if (error) return <ErrorCompoent />;

  return (
    <div className="AllCOins">
      {loadingSubcoin ? (
        <Loader />
      ) : (
        sub.map((i) => (
          <Subcoin1
            symbol={i.symbol}
            oprice={i.price_24h}
            volume={i.volume_24h}
          />
        ))
      )}
    </div>
  );
}
export default Subcoin;

const Subcoin1 = ({ id, name, img, volume, latprice, symbol, oprice }) => {
  return (
    <>
      <button className="coin">
        <p className="syname">{symbol}</p>

        <p className="Bitname">{`₹ ${oprice}`}</p>
        <p className="Bitname-v">{`V-${volume}`}</p>
        <Link to={`/coins/${id}`} className="url"></Link>
      </button>
    </>
  );
};

//
