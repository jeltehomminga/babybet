import React from "react";
import { useStitchAuth } from "../context/StitchAuth";
import { Container, Form, FormGroup, Input, Label } from "reactstrap";
import useFormInput from "../hooks/useFormInput";
import styled from '@emotion/styled'
import Select from 'react-select'
import useBabies from "../hooks/useBabies";

const InputStyled = styled(Input)({
  width: "400px",
  "@media (max-width: 430px)": {
    width: "260px"
  }
});

const SelectStyled = styled(Select)({
  width: "400px",
  "@media (max-width: 430px)": {
    width: "260px"
  }
});

const customSelectStyle = {
  option: (provided ) => ({
    ...provided,
    fontSize: '0.85rem',
    borderBottom: '1px dotted pink',
    color: '#495057',
  }),
  label: (provided) => ({
    ...provided,
    fontSize: '0.3rem',
  }),
  value: (provided) => ({
    ...provided,
    fontSize: '0.3rem',
  })
}

export default () => {
  const { isLoggedIn, currentUser } = useStitchAuth();
  const { customData, profile } = currentUser
  const { babiesState } = useBabies(currentUser.id);
  const firstNameUser = useFormInput('first name', customData.firstName || profile.firstName )
  const lastNameUser = useFormInput('last name', customData.lastName || profile.lastName)
  const genderUser = useFormInput('ouder', '')
 console.log(customData)
 console.log('babiesState', babiesState)

 const babyOptions = babiesState && babiesState.map(({ _id, parents}) => ({ value: String(_id), label: parents}))
 console.log('babyOptions', babyOptions) 
 debugger
  return (
    <>
      {isLoggedIn && (
        <Container fluid={false} style={{ display: "flex", justifyContent: "center" }}>
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
                  Male
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
                  Female
                </Label>
              </FormGroup>
            </FormGroup>

            <FormGroup>
        <Label for="exampleSelectMulti">I would love a babycard from..</Label>
        <SelectStyled
        styles={customSelectStyle}
        // onChange={this.handleChange}
        options={ babyOptions || []}
        className="basic-multi-select"
        classNamePrefix="select"
        isMulti
        defaultMenuIsOpen={true}
      />
      </FormGroup>

            <InputStyled type="submit" value="Submit" />
          </Form>
        </Container>
      )}
    </>
  );
};
