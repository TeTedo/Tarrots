import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: calc(100% - 100px);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Intro = styled.div`
  width: 100%;
  height: 33%;
  display: flex;
  align-items: center;
`;
const SpanIntro = styled.span`
  margin: 0 40px;
  font-size: 20px;
  font-weight: bold;
`;
const SpanCon = styled.span`
  margin: 0 40px;
`;
export { Wrap, Intro, SpanIntro, SpanCon };
