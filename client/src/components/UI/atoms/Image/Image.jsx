import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Image = ({ imageUrl, altTitle, width }) => <Image.Container src={imageUrl} alt={altTitle} width={width}/>

Image.Container = styled.img`
  width: ${props => props.theme.spacing[props.width] || '100%'};
  border-radius: 0.25rem 0.25rem 0 0;
  cursor: pointer;
  -webkit-filter: grayscale(0);
  filter: grayscale(0);
  -webkit-transition: .3s ease-in-out;
  transition: .3s ease-in-out;
  &:hover {
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
  }
`

Image.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  altTitle: PropTypes.string,
  width: PropTypes.string
}

export default Image
