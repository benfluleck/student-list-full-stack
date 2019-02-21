import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { spacing } from '<styles>/variables/spacing'
import { buttonColors, textColors } from '<styles>/variables/colorPalette'

/**
 * @description - Button Component
 *
 * @prop {string} padding - padding
 * @prop {func} onClick - onClick
 * @prop {bool} disabled - disabled
 *
 * Button Component
 */
const Button = ({ disabled, onClick, children, padding, borderRadius, color, backgroundColor }) => (
  <Button.Container
    padding={padding}
    onClick={onClick}
    disabled={disabled}
    borderRadius={borderRadius}
    backgroundColor={backgroundColor}
    color={color}
  >
    {children}
  </Button.Container>
)

Button.Container = styled.button`
  display: block;
  font-size: ${props => props.theme.fontSize.sm};
  padding: ${props => props.theme.spacing[props.padding]};
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  background: ${props => props.theme.buttonColors[props.backgroundColor]};
  color: ${props => props.theme.textColors[props.color]};
  border: 1px solid ${props => props.theme.buttonColors.primary};
  border-radius: ${props => props.theme.spacing[props.borderRadius]};

  &:hover {
    background-color: ${props => props.theme.buttonColors.hover};
    border: 1px solid ${props => props.theme.buttonColors.hover};
  }

  &:focus {
    border: 1px solid ${props => props.theme.buttonColors.black};
    box-shadow: inset 0 0 0 1px ${props => props.theme.buttonColors.black};
    outline: 0;
  }

  ${props =>
    props.disabled &&
    css`
      &:disabled {
        background-color: ${props => props.theme.buttonColors.grey};
        color: ${props => props.theme.buttonColors.disabledText};
        border: none;
        box-shadow: none;
      }
    `}
  }`

Button.propTypes = {
  padding: PropTypes.oneOf(Object.keys(spacing)),
  borderRadius: PropTypes.oneOf(Object.keys(spacing)),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.string.isRequired,
  backgroundColor: PropTypes.oneOf(Object.keys(buttonColors)),
  color: PropTypes.oneOf(Object.keys(textColors))
}

Button.defaultProps = {
  disabled: false,
  padding: 'basePlusXs',
  borderRadius: 'xs',
  backgroundColor: 'primary',
  color: 'white'
}

export default Button
