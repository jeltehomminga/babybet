import styled from "@emotion/styled";
import { BSON } from "mongodb-stitch-browser-sdk";
import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { Container, Form, FormGroup, Input, Label } from "reactstrap";
import { useStitchAuth } from "../context/StitchAuth";
import useBabies from "../hooks/useBabies";
import useBabyBets from "../hooks/useBabyBets";
import useFormInput from "./../hooks/useFormInput";

const InputStyled = styled(Input)({
  width: "400px",
  "@media (max-width: 430px)": {
    width: "260px"
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
    <Container style={{ display: "flex", justifyContent: "center" }}>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Parents</Label>
          <InputStyled type="select" {...parentsId.attributes}>
            <option value={""} key={""}>
              Select the parents
            </option>
            {babiesState &&
              babiesState.map(({ _id, parents }) => (
                <option value={_id} key={_id}>
                  {parents}
                </option>
              ))}
          </InputStyled>
        </FormGroup>

        <FormGroup>
          <Label for="babyname">Baby Name</Label>
          <InputStyled
            name="babyName"
            id="babyname"
            type="text"
            {...babyName.attributes}
          />
        </FormGroup>

        <FormGroup tag="fieldset">
          <legend>Gender</legend>
          <FormGroup check>
            <Label check>
              <InputStyled
                name="gender"
                type="radio"
                {...gender.attributes}
                value="boy"
                checked={gender.attributes.value === "boy"}
              />
              Boy
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label>
              <InputStyled
                name="gender"
                type="radio"
                {...gender.attributes}
                value="girl"
                checked={gender.attributes.value === "girl"}
              />
              Girl
            </Label>
          </FormGroup>
        </FormGroup>
        <FormGroup>
          <Label>Weight in kg</Label>
          <InputStyled {...weight.attributes} name="weight" type="number" />
        </FormGroup>
        <FormGroup>
          <Label>Day of birth</Label>
          <InputStyled type="date" {...birthDate.attributes} name="birthDate" />
        </FormGroup>

        <InputStyled type="submit" value="Submit" />
      </Form>
    </Container>
  );
};
