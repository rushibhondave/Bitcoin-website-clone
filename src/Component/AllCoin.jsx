import Loader from "./Loader";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AlertLine from "./AlertLine";
import { Link } from "react-router-dom";
import ErrorCompoent from "./ErrorCompoent";
function AllCoin() {
  const [Coinn, setCoin] = useState([]);
  const [loadingCoinn, setloadingCoinn] = useState(true);
  const [errorCoin, seterrorCoin] = useState(false);

  useEffect(() => {
    try {
      const fetchCoins = async () => {
        const { data } = await axios.get(
        // "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=500&page=1&sparkline=false&locale=en"
        );
        setCoin(data);
        setloadingCoinn(false);
      };

      fetchCoins();
    } catch (error) {
      seterrorCoin(true);
      setloadingCoinn(false);
    }
  });

  if (errorCoin) return <ErrorCompoent />;

  return (
    <div className="AllCOins">
      {loadingCoinn ? (
        <Loader />
      ) : (
        Coinn.map((i) => (
          <ExchangeCoin1
            id={i.id}
            img={i.image}
            symbol={i.symbol}
            name={i.name}
            price={i.current_price}
            url={i.url}
            oprice={i.price_24h}
          />
        ))
      )}
    </div>
  );
}
export default AllCoin;

const ExchangeCoin1 = ({ id, name, img, url, price, symbol, oprice }) => {
  return (
    <>
      <button className="coin">
        <img className="imu" src={img} alt={name} />
        <p>{symbol}</p>
        <p className="Bitname">{name}</p>
        <p>₹{price}</p>
        <Link to={`/coins/${id}`} className="url">
          <button className="Green">Info</button>
        </Link>
      </button>
    </>
  );
};

//
