import styled from "@emotion/styled";
import { BSON } from "mongodb-stitch-browser-sdk";
import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { useStitchAuth } from "../context/StitchAuth";
import useBabies from "../hooks/useBabies";
import useBabyBets from "../hooks/useBabyBets";
import useFormInput from "./../hooks/useFormInput";

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
  position: "relative",
  margin: 15,
  alignItems: "center",
  "@media (max-width: 420px)": {
    flexDirection: "column"
  }
});

const LabelHeader = styled.span({
  width: "50%",
  textAlign: "left",
  "@media (max-width: 420px)": {
    marginBottom: 10,
    textAlign: "center",
    width: "100%"
  }
});

export default () => {
  const { babyid } = useParams();
  const history = useHistory();
  const parentsId = useFormInput("parentsId", babyid || "");
  const babyName = useFormInput("baby name");
  const gender = useFormInput("gender");
  const weight = useFormInput("weight", 3.6);
  const birthDate = useFormInput(
    "birth date",
    new Date().toJSON().slice(0, 10)
  );
  const { currentUser } = useStitchAuth();
  const { babiesState } = useBabies(currentUser.id);
  const { addBabyBet } = useBabyBets(currentUser.id);

  useEffect(() => {
    parentsId.attributes.value !== babyid &&
      history.push(parentsId.attributes.value || "new");
  }, [babyid, history, parentsId.attributes.value]);

  const handleSubmit = e => {
    e.preventDefault();
    const babyBetData = {
      babyId: new BSON.ObjectId(parentsId.attributes.value),
      babyName: babyName.attributes.value,
      gender: gender.attributes.value,
      weight: weight.attributes.value,
      birthDate: new Date(birthDate.attributes.value)
    };
    addBabyBet(babyBetData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <legend>Guess the baby</legend>
      <fieldset>
        <Label>
          <LabelHeader>Parents</LabelHeader>
          <select {...parentsId.attributes}>
            <option value={""} key={""}>
              Select the parents
            </option>
            {babiesState &&
              babiesState.map(({ _id, parents }) => (
                <option value={_id} key={_id}>
                  {parents}
                </option>
              ))}
          </select>
        </Label>
        <Label>
          <LabelHeader>Baby Name</LabelHeader>
          <input name="babyName" type="text" {...babyName.attributes} />
        </Label>
        <Label>
          <LabelHeader>Gender</LabelHeader>
          <div>
            <label>
              <span style={{ marginRight: 10 }}>Boy</span>
              <input
                name="gender"
                type="radio"
                {...gender.attributes}
                value="boy"
                checked={gender.attributes.value === "boy"}
              />
            </label>
            <label>
              <span style={{ marginRight: 10, marginLeft: 20 }}>Girl</span>
              <input
                name="gender"
                type="radio"
                {...gender.attributes}
                value="girl"
                checked={gender.attributes.value === "girl"}
              />
            </label>
          </div>
        </Label>
        <Label>
          <LabelHeader>Weight in kg</LabelHeader>
          <input {...weight.attributes} name="weight" type="number" />
        </Label>
        <Label>
          <LabelHeader>Day of birth</LabelHeader>
          <input type="date" {...birthDate.attributes} name="birthDate"></input>
        </Label>
      </fieldset>

      <input type="submit" value="Submit" />
    </Form>
  );
};
