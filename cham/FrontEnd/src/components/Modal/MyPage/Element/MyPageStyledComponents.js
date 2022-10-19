import styled from "styled-components";
const WholeWrap = styled.div`
  width: 100%;
  height: 100%;
`;
const Wrap = styled.div`
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  height: 20px;
  padding: 5px;
  margin-left: 20px;
  :nth-child(2) {
    width: 70px;
  }
`;
const Preview = styled.span`
  margin-left: 20px;
  width: 50px;
  height: 50px;
`;
const PreviewImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
const BtnWrap = styled.button`
  width: 80%;
  height: 50px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: 2px solid green;
  font-weight: bold;
  color: green;
  :hover {
    cursor: pointer;
    background-color: green;
    color: white;
  }
`;
const PaginationElem = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
`;
const BuyBtn = styled.button`
  width: 100%;
  height: 35px;
  border: 2px solid green;
  background-color: white;
  border-radius: 12px;
  font-weight: bold;
  cursor: pointer;
  :hover {
    background-color: green;
    color: white;
  }
`;
const PaginationNum = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const ComponentWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  border-radius: 12px;
  border: 2px solid green;
`;

const ComponentSpan = styled.span`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Img = styled.img`
  height: 40px;
  width: 40px;
`;
const Nav = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 5px;
`;
const NumCount = styled.span`
  margin: 0px 5px;
  cursor: pointer;
`;
export {
  Wrap,
  Input,
  Preview,
  PreviewImg,
  BtnWrap,
  WholeWrap,
  PaginationElem,
  BuyBtn,
  PaginationNum,
  ComponentWrap,
  ComponentSpan,
  Img,
  Nav,
  NumCount,
};
