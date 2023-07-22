import Loader from "./Loader";
import ErrorCompoent from "./ErrorCompoent";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AlertLine from "./AlertLine";
import { Link } from "react-router-dom";
function ExchangeCoin() {
  const [co, setco] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(false);

  useEffect(() => {
    try {
      const fetchCoins = async () => {
        const { data } = await axios.get(
       //   "https://api.coingecko.com/api/v3/exchanges"
        );
        setco(data);
        setloading(false);
      };

      fetchCoins();
    } catch (error) {
      seterror(true);
      setloading(false);
    }
  });

  // if (error) return <ErrorCompoent />;

  return (
    <div className="AllCOins">
      {loading ? (
        <Loader />
      ) : (
        co.map((i) => (
          <ExchangeCoin2
            img={i.image}
            name={i.name}
            rank={i.trust_score_rank}
            url={i.url}
            oprice={i.price_24h}
            osymbol={i.symbol}
          />
        ))
      )}
    </div>
  );
}
export default ExchangeCoin;

const ExchangeCoin2 = ({ name, img, rank, url, oprice, osymbol }) => {
  return (
    <>
      <button className="coin">
        <img className="imu" src={img} alt={name} />
        <p>{osymbol}</p>
        <p className="Bitname">{name}</p>
        <h4 className="rank">{rank}</h4>
        <Link to={url} target="_blank" className="url">
          <button className="Green"> Buy</button>
        </Link>
      </button>
    </>
  );
};
