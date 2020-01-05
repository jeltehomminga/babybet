import React from "react";
import { couples } from "./../utils";
import styled from "@emotion/styled";

const CoupleRow = styled.li({
  display: "flex",
  alignItems: "center",
  margin: 20
});


export default () => {
  return (
    <div>
      <h1>Babies</h1>
      <ul>
      {couples.map((couple, index) => (
        <CoupleRow key={index}>
            {couple[0].name + ' & ' + couple[1].name}
        </CoupleRow>
      ))}
      </ul>
    </div>
  );
};
