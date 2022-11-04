import styled from "styled-components";

const Wrap = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 999;
`;

const AddContent = styled.div`
  border-radius: 12px;
  width: 300px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const AddMenu = styled.input`
  width: 80%;
  height: 50px;
  border: 1px solid black;
  border-radius: 5px;
  padding-left: 10px;
`;
const AddBtn = styled.div`
  width: 30%;
  height: 50px;
  margin-top: 50px;
  border: 1px solid black;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: bold;
  :hover {
    background: rgb(34, 193, 195);
    background: linear-gradient(
      0deg,
      rgba(34, 193, 195, 1) 0%,
      rgba(253, 244, 45, 1) 100%
    );
  }
`;
const CheckContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
  background-color: white;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CheckWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;
const CheckMenu = styled.div`
  width: 80%;
  height: 50px;
  border: 1px solid black;
  margin: 20px;
  box-shadow: 2px 2px 3px black;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CheckSapn = styled.span`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;
export {
  Wrap,
  AddContent,
  AddMenu,
  AddBtn,
  CheckContent,
  CheckWrap,
  CheckMenu,
  CheckSapn,
};
