import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export { Wrap, Img };
