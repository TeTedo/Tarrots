import styled from "styled-components";

const ModalWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 999;
`;

const Wrap = styled.div`
  position: absolute;
  width: 400px;
  height: 300px;
  border-radius: 12px;
  border: 2px solid green;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  color: black;
  display: flex;
  justify-content: center;
`;
const Title = styled.div`
  width: 300px;
  height: 50px;
  margin-top: 30px;
  color: green;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
`;
const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 200px;
  padding: 10px;
  font-size: large;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const LabelWrap = styled.div`
  display: flex;
`;
const Label = styled.label`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: black;
  margin-bottom: 10px;
  margin-right: 10px;
`;
const InputWrap = styled.div`
  width: 200px;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;
const Input = styled.input`
  width: 200px;
  height: 30px;
  margin: 0 10px;
  border-radius: 12px;
  padding-left: 10px;
`;
const BtnWrap = styled.div`
  width: 50%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Btn = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  :hover {
    background-color: green;
  }
`;
const LastBtn = styled.div`
  width: 100px;
  height: 30px;
  text-align: center;
  border: 1px solid green;
  background-color: green;
  color: white;
  border-radius: 12px;
  margin: 0 10px;
  :hover {
    background-color: white;
    color: green;
    cursor: pointer;
  }
`;
export { ModalWrap, Wrap, Content, Title, LabelWrap, Label, Input, InputWrap, Btn, BtnWrap, LastBtn };
