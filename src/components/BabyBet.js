import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import useFormInput from "./../hooks/useFormInput";
import iconcheck from "../../src/iconcheck.svg";
import { getDefaultNormalizer } from "@testing-library/react";

const Form = styled.form({
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  maxWidth: "500px",
  alignSelf: "center"
});

const Label = styled.label({
  display: "flex",
  justifyContent: "space-between",
  position: "relative"
});

const IconCheck = styled.img({
  position: "absolute",
  float: "right",
  textAlign: "right",
  width: 23,
  top: 2,
  right: 2,
  zIndex: 1
});

export default () => {
  const firstName = useFormInput("first name");
  const babyName = useFormInput("baby name");
  console.log("firstName", firstName);
  console.log("babyName", babyName);
  return (
    <div>
      <h2>New bet!</h2>

      <Form>
        <fieldset>
          <legend>Guess the baby</legend>
          <Label>
            First name
            <input name="firstName" type="text" {...firstName.attributes} />
            {/* {firstName.valid && <IconCheck src={iconcheck} alt="valid-icon" />}
            {firstName.invalidElementOutput} */}
          </Label>
          <Label>
            Baby Name
            <input name="babyName" type="text" {...babyName.attributes} />
          </Label>
          <Label as="div">
            Gender
            <label>
              <input
                name="gender"
                type="radio"
                value="boy"
                {...getDefaultNormalizer.attributes}
              />
            </label>
            <label>
              <input
                name="gender"
                type="radio"
                value="girl"
                {...getDefaultNormalizer.attributes}
              />
            </label>
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
      <h2>
        <Link to="/highscore">Highscore</Link>
      </h2>
    </div>
  );
};
