import styled from "styled-components";
const BtnWrap = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Btn = styled.button`
  width: 100px;
  height: 50px;
  font-size: 17px;
  font-weight: bold;
  cursor: pointer;
  background-color: white;
  border-radius: 12px;
  :hover {
    background-color: black;
    color: white;
  }
`;

const Container = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TokenWrap = styled.div`
  border: 1px solid black;
  width: 500px;
  height: 400px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const SwapWrap = styled.div`
  width: 100%;
  height: 80%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const TokenBtnWrap = styled.div`
  margin-top: 20px;
  width: 100px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 12px;
  cursor: pointer;
  :hover {
    background-color: black;
    color: white;
  }
`;
const SwapToken = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TokenSwapWrap = styled.div`
  width: 400px;
  height: 50px;
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 12px;
`;
const TokenIcon = styled.span`
  width: 50px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;
const TokenSymbol = styled.span`
  width: 70px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;
const SwapInput = styled.input`
  width: 230px;
  height: 100%;
  padding-left: 10px;
  box-sizing: border-box;
  font-size: 18px;
`;
const MaxBtn = styled.span`
  width: 50px;
  height: 100%;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const SwapIcon = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const IconImg = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

const FruitsWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const FruitsComWrap = styled.div`
  width: 200px;
  height: 400px;
  border: 1px solid black;
`;
const FruitsTop = styled.div`
  width: 100%;
  height: 50%;
`;
const FruitsBottom = styled.div`
  width: 100%;
  height: 50%;
`;
export {
  BtnWrap,
  Btn,
  Container,
  TokenWrap,
  SwapWrap,
  TokenBtnWrap,
  SwapToken,
  SwapIcon,
  MaxBtn,
  TokenSwapWrap,
  TokenIcon,
  TokenSymbol,
  SwapInput,
  IconImg,
  FruitsWrap,
  FruitsComWrap,
  FruitsTop,
  FruitsBottom,
};
