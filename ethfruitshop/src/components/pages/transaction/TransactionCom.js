import React from "react";
import { ComWrap } from "./styledComponents";
import { DeployedContext } from "App";
import { useContext } from "react";
const TransactionCom = ({ data }) => {
  const { account } = useContext(DeployedContext);
  return (
    <ComWrap>
      <div>
        {data.from === account
          ? "Me"
          : data.from.slice(0, 4) + "..." + data.from.slice(38)}
      </div>
      <div>
        {data.to === account
          ? "Me"
          : data.to.slice(0, 4) + "..." + data.to.slice(38)}
      </div>
      <div>{data.name === "apple-whole" ? "apple" : data.name}</div>
      <div>{data.num}</div>
      <div>
        {data.value} {data.pay === "ETH" ? "ETH" : "FRT"}
      </div>
    </ComWrap>
  );
};

export default TransactionCom;
