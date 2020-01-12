import React from "react";
import { useStitchAuth } from "../context/StitchAuth";
import useBabyBets from "../hooks/useBabyBets";

export default () => {
  const { currentUser } = useStitchAuth();
  const { babyBetsState } = useBabyBets(currentUser.id);
  return (
    <div>
      <h1>All Bets</h1>
      <table style={{margin: 'auto'}}>
        <thead>
          <tr>
            <th>Baby name</th>
            <th>Gender</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          {babyBetsState &&
            babyBetsState.map(babybet => (
              <tr key={JSON.stringify(babybet._id)}>
                <td>{babybet.babyName}</td>
                <td>{babybet.gender}</td>
                <td>{babybet.weight}</td>
              </tr>
            ))}
        </tbody>
      </table>
      {/* <pre>{JSON.stringify(babyBetsState, 0, 2)}</pre> */}
    </div>
  );
};
