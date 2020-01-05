/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import { couples } from "./../utils";
import styled from "@emotion/styled";

const CoupleRow = styled.li({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  margin: 20
});

const ColumnField = styled.span({
    color: 'deepSkyBlue',
    width: '20%'
})

export default () => {
  return (
    <div>
      <h1>Babies</h1>
      <ul>
        <CoupleRow>
          <ColumnField>Couple</ColumnField>
          <ColumnField>Name</ColumnField>
          <ColumnField>Due</ColumnField>
          <ColumnField></ColumnField>
        </CoupleRow>
        {couples.map((couple, index) => (
          <CoupleRow key={index}>
            <ColumnField>
              <span role="img" aria-label="baby-emoji">
                👶🏼
              </span>{" "}
              {couple[0].name + " & " + couple[1].name}
            </ColumnField>
            <ColumnField >🤷🏼‍♂️</ColumnField>
            <ColumnField >17-7</ColumnField>
            <ColumnField >Baby Bet!</ColumnField>
          </CoupleRow>
        ))}
      </ul>
    </div>
  );
};
