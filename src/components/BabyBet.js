import styled from "@emotion/styled";
import React from "react";
import useFormInput from "./../hooks/useFormInput";
import useBabies from "../hooks/useBabies";
import { useStitchAuth } from "../context/StitchAuth";

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

// const IconCheck = styled.img({
//   position: "absolute",
//   float: "right",
//   textAlign: "right",
//   width: 23,
//   top: 2,
//   right: 2,
//   zIndex: 1
// });

export default () => {
  const parentsId = useFormInput('parentsId', '')
  const firstName = useFormInput("first name");
  const babyName = useFormInput("baby name");
  const gender = useFormInput("gender");
  const weight = useFormInput("weight", 3.6);
  const birthDate = useFormInput(
    "birth date",
    new Date().toJSON().slice(0, 10)
  );
  const { currentUser } = useStitchAuth();
  const { babiesState } = useBabies(currentUser.id);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e);
    console.log(babiesState);
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <fieldset>
          <Label>
            Parents
            <select {...parentsId.attributes} >
            <option value={''} key={''}>Select the parents</option>
              {babiesState &&
                babiesState.map(({ _id, parents }) => (
                  <option value={_id} key={_id}>{parents}</option>
                ))}
            </select>
          </Label>
          <legend>Guess the baby</legend>
          <Label>
            First name
            <input name="firstName" type="text" {...firstName.attributes} />
          </Label>
          <Label>
            Baby Name
            <input name="babyName" type="text" {...babyName.attributes} />
          </Label>
          <Label as="div">
            Gender
            <label>
              Boy
              <input
                name="gender"
                type="radio"
                {...gender.attributes}
                value="boy"
                checked={gender.attributes.value === "boy"}
              />
            </label>
            <label>
              Girl
              <input
                name="gender"
                type="radio"
                {...gender.attributes}
                value="girl"
                checked={gender.attributes.value === "girl"}
              />
            </label>
          </Label>
          <Label>
            Weight in kilograms
            <input {...weight.attributes} name="weight" type="number" />
          </Label>
          <Label>
            Day of birth
            <input
              type="date"
              {...birthDate.attributes}
              name="birthDate"
            ></input>
          </Label>
        </fieldset>

        <input type="submit" value="Submit" />
      </Form>
    </div>
  );
};
