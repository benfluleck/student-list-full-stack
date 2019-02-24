
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Text from '<atoms>/Text/Text'

const MenuItem = ({ title, onClick }) => (
  <MenuItem.Container>
    <Text
      fontSize="xs"
      display="block"
      onClick={onClick}
    >
      {title}
    </Text>
  </MenuItem.Container>

)

export default MenuItem

MenuItem.Container = styled.div`
  padding: 0.8rem 1.6rem;
   ${props =>
    `cursor: pointer;
      &:hover,
      &:active,
      &:focus {
        background-color: ${props.theme.textColors.lightGrey100};
      }
    `};
`

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func
}
