import React from "react";
import { useStitchAuth } from "../context/StitchAuth";
import { Container, Form, FormGroup, Input, Label } from "reactstrap";
import useFormInput from "../hooks/useFormInput";
import styled from "@emotion/styled";
import Select from "react-select";
import useBabies from "../hooks/useBabies";

const InputStyled = styled(Input)({
  width: "400px",
  "@media (max-width: 430px)": {
    width: "260px"
  }
});

const SelectStyled = styled(Select)({
  fontSize: "14px",
  width: "400px",
  "@media (max-width: 430px)": {
    width: "260px"
  }
});

const customSelectStyle = {
  option: provided => ({
    ...provided,
    borderBottom: "1px dotted pink",
    color: "#495057"
  })
};

export default () => {
  const { isLoggedIn, currentUser } = useStitchAuth();
  const { customData, profile } = currentUser;
  const { babiesState } = useBabies(currentUser.id);
  const firstNameUser = useFormInput(
    "first name",
    customData.firstName || profile.firstName
  );
  const lastNameUser = useFormInput(
    "last name",
    customData.lastName || profile.lastName
  );
  const genderUser = useFormInput("ouder", customData.gender || profile.gender);
  const babyCards = useFormInput("parents", []);
  const street = useFormInput('street')
  const houseNumber = useFormInput('number')
  const postalCode = useFormInput('postal code')
  const city = useFormInput('city')

  console.log(customData);
  console.log("babiesState", babiesState);
  console.log("genderUser", genderUser);

  const babyOptions =
    babiesState &&
    babiesState.map(({ _id, parents }) => ({
      value: String(_id),
      label: parents
    }));
  console.log("babyOptions", babyOptions);

  return (
    <>
      {isLoggedIn && (
        <Container
          fluid={false}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Form onSubmit={() => {}}>
            <FormGroup>
              <Label for="firstName">First Name</Label>
              <InputStyled
                name="firstNameUser"
                id="firstnameuser"
                type="text"
                {...firstNameUser.attributes}
              />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">Last Name</Label>
              <InputStyled
                name="lastNameUser"
                id="lastnameuser"
                type="text"
                {...lastNameUser.attributes}
              />
            </FormGroup>

            <FormGroup tag="fieldset">
              <legend>Gender</legend>
              <FormGroup check>
                <Label check>
                  <InputStyled
                    name="genderuser"
                    type="radio"
                    {...genderUser.attributes}
                    value="male"
                    checked={genderUser.attributes.value === "male"}
                  />
                  Male
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label>
                  <InputStyled
                    name="genderuser"
                    type="radio"
                    {...genderUser.attributes}
                    value="female"
                    checked={genderUser.attributes.value === "female"}
                  />
                  Female
                </Label>
              </FormGroup>
            </FormGroup>

            <FormGroup>
              <Label for="exampleSelectMulti">
                I would love a babycard from..
              </Label>
              <SelectStyled
                styles={customSelectStyle}
                // onChange={this.handleChange}
                options={babyOptions || []}
                name="babyCards"
                className="basic-multi-select"
                classNamePrefix="select"
                isMulti
                {...babyCards.attributes}
              />
            </FormGroup>
            <FormGroup>
            <Label for="street">Street</Label>
              <InputStyled
                name="street"
                id="street"
                type="text"
                {...street.attributes}
              />
            </FormGroup>
            <FormGroup>
              <Label for="houseNumber">House number</Label>
              <InputStyled
                name="houseNumber"
                id="housenumber"
                type="number"
                {...houseNumber.attributes}
              />
            </FormGroup>
            <FormGroup>
              <Label for="postalCode">Postal code</Label>
              <InputStyled
                name="postalCode"
                id="postalcodee"
                type="text"
                {...postalCode.attributes}
              />
            </FormGroup>
            <FormGroup>
              <Label for="city">City</Label>
              <InputStyled
                name="city"
                id="city"
                type="text"
                {...city.attributes}
              />
            </FormGroup>



            <InputStyled type="submit" value="Submit" />
          </Form>
        </Container>
      )}
    </>
  );
};
