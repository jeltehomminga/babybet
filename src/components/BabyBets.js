import React from "react";
import { useStitchAuth } from "../context/StitchAuth";
import useBabyBets from "../hooks/useBabyBets";
import { Table } from 'reactstrap'
import styled from "@emotion/styled";


const TableStyled = styled(Table)({

  "@media (max-width: 430px)": {
    fontSize: "70%"
  }
});

export default () => {
  const { currentUser } = useStitchAuth();
  const { babyBetsState } = useBabyBets(currentUser.id);
  return (
      <TableStyled borderless className="text-white">
        <thead>
          <tr>
            <th>Bet by</th>
            <th>name</th>
            <th>Gender</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          {babyBetsState &&
            babyBetsState.map(babybet => (
              <tr key={JSON.stringify(babybet._id)}>
                <td>{babybet.betBy}</td>
                <td>{babybet.babyName}</td>
                <td>{babybet.gender}</td>
                <td>{babybet.weight}</td>
              </tr>
            ))}
        </tbody>
      </TableStyled>
      // <pre className="text-white">{JSON.stringify(babyBetsState, 0, 2)}</pre>
  );
};
