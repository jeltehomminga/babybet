import React from "react";
import { couples } from "../utils";
import styled from "@emotion/styled";

const CoupleRow = styled.div({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around"
});

const CoupleDiv = styled.div({
  width: "5.5em",
  margin: "5px"
});

const CoupleNameDiv = styled(CoupleDiv)({
  fontSize: '80%',
  display: "flex",
  width: "30%",
  justifyContent: "space-around",
  flexWrap: "no-wrap"
});

export default () => {
  return (
    <div>
      {couples.map((couple, index) => (
        <CoupleRow key={index}>
          <CoupleDiv>
            <img
              style={{ width: "100%", height: "auto", borderRadius: "100%" }}
              src={couple[0].img}
              alt={`fbImg${couple[0].name}`}
            />
          </CoupleDiv>
          <CoupleNameDiv>
            <p>{couple[0].name}</p>

            <span style={{ fontSize: 28 }} role="img" aria-label="heart-emoji">
              💗
            </span>
            <p>{couple[1].name}</p>
          </CoupleNameDiv>
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
