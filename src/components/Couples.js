import React from "react";
import { couples } from "./../utils";
import styled from "@emotion/styled";

const CoupleRow = styled.div({
  display: "flex",
  alignItems: "center",
  margin: 20
});

const CoupleDiv = styled.div({
  width: '6em',
  margin: '5px'
});

export default () => {
  return (
    <div>
      <h1>Couples</h1>
      {couples.map((couple, index) => (
        <CoupleRow key={index}>
          <CoupleDiv>
            <img
              style={{ width: "100%", height: "auto", borderRadius: "100%" }}
              src={couple[0].img}
              alt={`fbImg${couple[0].name}`}
            />
          </CoupleDiv>
          <CoupleDiv style={{fontSize: 16}}>

              <p>{couple[0].name}</p>

            <span style={{ fontSize: 28 }} role="img" aria-label="heart-emoji">
              💗
            </span>
              <p>{couple[1].name}</p>
          </CoupleDiv>
          <CoupleDiv>
            <img
              style={{ width: "100%", height: "auto", borderRadius: "100%" }}
              src={couple[1].img}
              alt={`fbImg${couple[1].name}`}
            />
          </CoupleDiv>
        </CoupleRow>
      ))}
    </div>
  );
};
