import React, { useContext, useEffect, useState } from "react";
import BuySellList from "components/BuySellList";
import { DeployedContext } from "App";
const Buy = () => {
  const { deployed } = useContext(DeployedContext);
  const [shopData, setShopData] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageLength, setPageLength] = useState(1);
  useEffect(() => {
    (async () => {
      if (!deployed) return;
      const fruitList = await deployed.methods.getFruitInitList().call();
      const fruitTrader = await deployed.methods.getFruitTrader("SELL").call();
      let data = [];
      for (const value of fruitList) {
        for (const trader of fruitTrader) {
          const temp = await deployed.methods
            .getSellerList(value, "SELL", trader)
            .call();
          if (temp.status === "on") data.push(temp);
        }
      }
      data = data.sort((a, b) => b.date - a.date);
      setShopData(data);
      setPageLength(Math.floor(data.length / 6));
    })();
  }, [deployed]);

  const movePage = (idx) => {
    setPageIndex(idx);
  };
  return (
    <div className="shopWrap">
      {shopData &&
        shopData
          .map((v, idx) => (
            <BuySellList
              key={idx}
              owner={v.owner}
              name={v.name}
              price={v.price}
              num={v.num}
              type={v.typeIs}
            />
          ))
          .slice(pageIndex * 6, pageIndex * 6 + 6)}
      <div className="pagination">
        {new Array(pageLength + 1).fill(0).map((v, idx) => (
          <span
            onClick={() => {
              movePage(idx);
            }}
            style={{ fontWeight: pageIndex === idx ? "bold" : "" }}
            key={idx}
            className="paginationNum"
          >
            {idx + 1}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Buy;
