/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import styled from "@emotion/styled";
import useBabies from './../hooks/useBabies'
import { useStitchAuth } from '../context/StitchAuth'

const CoupleRow = styled.li({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  margin: 20
});

const ColumnField = styled.span({
    color: 'deepSkyBlue',
    width: '30%',
})

export default () => {
  const { currentUser } = useStitchAuth();
  const { babiesState } = useBabies(currentUser.id)
  return (
    <div>
      <h1>Babies</h1>
      <ul>
        <CoupleRow>
          <ColumnField>Couple</ColumnField>
          <ColumnField>Name</ColumnField>
          <ColumnField>Due</ColumnField>
        </CoupleRow>
        {babiesState && babiesState.map((baby, index) => (
          <CoupleRow key={index}>
            <ColumnField style={{display: 'flex', justifyContent: 'space-between'}}>
              <span role="img" aria-label="baby-emoji">
                👶🏼
              </span>{" "}
              {baby.parents}
            </ColumnField>
        <ColumnField >{baby.dueDate.toLocaleDateString('en-GB', { month: 'long', day: 'numeric' })}</ColumnField>
            <ColumnField >Baby Bet!</ColumnField>
          </CoupleRow>
        ))}
      </ul>
    </div>
  );
};
