import React from "react";
import { useStitchAuth } from "../context/StitchAuth";
import { Container, Form, FormGroup, Input, Label } from "reactstrap";
import useFormInput from "../hooks/useFormInput";
import styled from '@emotion/styled'

const InputStyled = styled(Input)({
  width: "400px",
  "@media (max-width: 430px)": {
    width: "260px"
  }
});

export default () => {
  const { isLoggedIn, currentUser : { customData, profile } } = useStitchAuth();
  const firstNameUser = useFormInput('first name', customData.firstName || profile.firstName )
  const lastNameUser = useFormInput('last name', customData.lastName || profile.lastName)
  const genderUser = useFormInput('ouder', '')
 console.log(customData)
  debugger
  return (
    <>
      {isLoggedIn && (
        <Container fluid={false}>
          <Form onSubmit={''}>

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
                    value="father"
                    checked={genderUser.attributes.value === "father"}
                  />
                  Boy
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label>
                  <InputStyled
                    name="genderuser"
                    type="radio"
                    {...genderUser.attributes}
                    value="mother"
                    checked={genderUser.attributes.value === "mother"}
                  />
                  Mother
                </Label>
              </FormGroup>
            </FormGroup>

            <InputStyled type="submit" value="Submit" />
          </Form>
        </Container>
      )}
    </>
  );
};
