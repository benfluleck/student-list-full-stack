import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import TextInput from '<atoms>/TextInput/TextInput'
import Text from '<atoms>/Text/Text'

/**
 * @description - InputTextField component combined with an error field
 *
 * @prop {string} - placeholder
 * @prop {string | number} - value
 * @prop {bool} - isError
 * @prop {func} - onChange
 * @prop {string} - inputWidth
 *
 * @returns {JSX} - TextInput Component
 *
 * TextInput Component
 */
const InputTextField = ({
  value,
  placeholder,
  fieldName,
  onChange,
  errorMessage,
  showError
}) => {
  return (
    <InputTextField.Conntainer>
      <Text fontSize="base">
        {fieldName}
      </Text>
      <InputTextField.InnerContainer>
        <TextInput
          placeholder={placeholder}
          value={value}
          isError={showError && errorMessage !== null}
          onChange={onChange}/>
        {showError && errorMessage && <Text color="red" fontSize="sm" padding="xxs" >{errorMessage}</Text>}
      </InputTextField.InnerContainer>
    </InputTextField.Conntainer>
  )
}

InputTextField.propTypes = {
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  fieldName: PropTypes.string,
  value: PropTypes.string,
  errorMessage: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  showError: PropTypes.bool,
  onChange: PropTypes.func.isRequired
}

InputTextField.defaultProps = {
  showError: false
}

InputTextField.InnerContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 80%;
`
InputTextField.Conntainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export default InputTextField
