import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Form = styled.form({
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  maxWidth: "500px",
  alignSelf: "center"
});

const Label = styled.label({
  display: "flex",
  justifyContent: "space-between"
});

export default () => {
  return (
    <div>
      <h2>New bet!</h2>
      <Form>
        <fieldset style={{marginBottom: 30}}>
          <legend>Your details</legend>
          <Label>
            <span>Name</span>
            <input type="text"></input>
          </Label>
          <Label>
            <span>I would like a babycard</span>
            <input type="radio"></input>
          </Label>
          <Label>
            <span>Message for the baby</span>
            <input type="text"></input>
          </Label>
        </fieldset>
        <fieldset>
          <legend>Guess the baby</legend>

          <Label>
            <span>BabyName</span>
            <input type="text"></input>
          </Label>

          <Label>
            <span>Gender</span>
            <input type="radio"></input>
          </Label>

          <Label>
            <span>Weight in grams</span>
            <input type="number"></input>
          </Label>

          <Label>
            Day of birth<input type="date"></input>
          </Label>
        </fieldset>
      </Form>
      <h2><Link to='/highscore'>Highscore</Link></h2>
    </div>
  );
};
