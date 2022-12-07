import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Header = styled.div`
  width: 80%;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-top: 10px;
`;
const ComWrap = styled.div`
  width: 80%;
  border: 1px solid black;
  margin-top: 10px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
  box-shadow: 2px 2px 5px black;
  padding: 10px;
`;
const PaginationWrap = styled.div`
  position: absolute;
  bottom: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
`;
const Pagination = styled.div`
  width: 30px;
  height: 30px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export { Wrap, ComWrap, Header, PaginationWrap, Pagination };
