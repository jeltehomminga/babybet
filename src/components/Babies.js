import React from "react";
import useBabies from "./../hooks/useBabies";
import { useStitchAuth } from "../context/StitchAuth";
import { Link } from "react-router-dom";
import { Table } from "reactstrap";

export default () => {
  const { currentUser } = useStitchAuth();
  const { babiesState } = useBabies(currentUser.id);
  return (
    <Table borderless className="text-white">
      <thead>
        <tr>
          <th>Parents</th>
          <th>Due</th>
          <th>Guess!</th>
        </tr>
      </thead>
      <tbody>
        {babiesState &&
          babiesState.map((baby, index) => (
            <tr key={index}>
              <td style={{ display: "flex", justifyContent: "space-between" }}>
                {baby.parents}
              </td>
              <td>
                {baby.dueDate.toLocaleDateString("en-GB", {
                  month: "long",
                  day: "numeric"
                })}
              </td>
              <td>
                <Link
                  to={`babybets/newbet/${baby._id}`}
                  style={{ color: "white" }}
                >
                  Baby Guess!
                </Link>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};
