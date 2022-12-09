import React from "react";
import { Wrap, Intro, SpanIntro, SpanCon } from "./styledComponents";
const Home = () => {
  return (
    <Wrap>
      <Intro>
        <SpanIntro>상점 이용</SpanIntro>
        <SpanCon>
          <p>상점에서 당근, 사과, 레몬 3종류의 과일을 구매할 수 있습니다!</p>
          <p>상점에서 FRUIT 토큰(FRT)를 구매할 수 있습니다!</p>
          <p>상점의 과일들은 100개 한정수량이므로 서두르세요!</p>
        </SpanCon>
      </Intro>
      <Intro>
        <SpanIntro>장터 이용</SpanIntro>
        <SpanCon>
          <p>구매하기에서 내가 사고 싶은 과일을 구매할 수 있습니다!</p>
          <p>판매하기에서 내가 가지고 있는 과일을 판매할 수 있습니다!</p>
        </SpanCon>
      </Intro>
      <Intro>
        <SpanIntro>판매 기록</SpanIntro>
        <SpanCon>
          <p>판매기록에서 과일가게 이용 현황을 알아볼 수 있습니다!</p>
        </SpanCon>
      </Intro>
    </Wrap>
  );
};

export default Home;
