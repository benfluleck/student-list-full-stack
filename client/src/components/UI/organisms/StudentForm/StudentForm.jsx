import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import InputTextField from '<molecules>/InputTextField/InputTextField'

const StudentForm = ({ firstname, lastname, hobbies, birthdate, errorMessage, onChange }) => (
  <StudentForm.Container>
    <InputTextField
      placeholder="Enter firstname"
      fieldName= "Firstname"
      showError={errorMessage.firstname}
      value={firstname}
      errorMessage={errorMessage.firstname}
      onChange={onChange}/>
    <InputTextField
      placeholder="Enter lastname"
      fieldName="Lastname"
      showError={errorMessage.lastname}
      value={lastname}
      errorMessage={errorMessage.lastname}
      onChange={onChange} />
  </StudentForm.Container>

)

export default StudentForm

StudentForm.Container = styled.div`
  display: grid;
  grid-gap: 1rem;
`

StudentForm.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  hobbies: PropTypes.arrayOf(PropTypes.string),
  birthdate: PropTypes.number,
  errorMessage: PropTypes.shape({
    firstname: PropTypes.string,
    lastname: PropTypes.string
  }),
  onChange: PropTypes.func
}
