import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getCoinsAction } from "../redux/coinsDucks";

const Coins = () => {
  const dispatch = useDispatch();
  const coins = useSelector((store) => store.coins.coins);

  useEffect(() => {
    dispatch(getCoinsAction());
  }, [dispatch]);

  return (
    <>
      <h1>Coins</h1>
      <div>
        {coins.map((coin) => (
          <p key={coin.id} style={{ display: "flex", alignItems: "center" }}>
            <img src={coin.image} alt="" style={{ height: 30, width: 30 }} />
            <span>
              {coin.name} - ${coin.current_price}
            </span>
          </p>
        ))}
      </div>
    </>
  );
};

export default Coins;
