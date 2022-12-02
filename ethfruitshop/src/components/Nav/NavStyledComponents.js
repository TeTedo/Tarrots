import styled from "styled-components";
const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

const Nav = styled.div`
  border: 1px solid black;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  border-radius: 12px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  :hover {
    background-color: black;
    color: white;
  }
`;
export { Wrap, Nav };
