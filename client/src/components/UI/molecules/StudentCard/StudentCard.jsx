import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Text from '<atoms>/Text/Text'
import Image from '<atoms>/Image/Image'
import { getDate } from '<helpers>/helpers'

/**
 * @description - StudentCard component
 * @prop {number} index - index
 * @prop {string} firstname - student's first name
 * @prop {string} lastname - student's last name
 * @prop {string} photoURl - student's photoUrl
 * @prop {string} birthdate - student's birthday
 * @prop {string} altText - student's alternative text for Image
 * @prop {array} hobbies - student hobbies
 *
 * @returns {JSX} - StudentCard Component
 * StudentCard Component
 */
function StudentCard ({ firstname, lastname, birthdate, photoUrl, altText, hobbies }) {
  const renderBirthDate = (hobbies) => hobbies.map(hobby => hobby.name).join(', ')
  return (
    <StudentCard.Container>
      <Image imageUrl={photoUrl} altText={altText} />
      <StudentCard.Content>
        <StudentCard.Title>
          <Text fontWeight="bold" fontSize="base">{`${firstname} ${lastname}`}</Text>
        </StudentCard.Title>
        <StudentCard.HobbiesContainer>
          <StudentCard.HobbiesTitle>
            <Text color="grey">Hobbies</Text>
          </StudentCard.HobbiesTitle>
          <Text fontSize="xxxs">{renderBirthDate(hobbies)}</Text>
        </StudentCard.HobbiesContainer>
      </StudentCard.Content>
      <StudentCard.Footer>
        <Text fontSize="xs" color="lightGrey">Birthday: </Text>
        <Text fontSize="xs" color="lightGrey">{getDate(birthdate)}</Text>
      </StudentCard.Footer>
    </StudentCard.Container>
  )
}

export default StudentCard

StudentCard.Container = styled.div`
  max-width: ${props => props.theme.spacing.cards};
  box-shadow: 0px 2px 18px -4px rgba(0, 0, 0, 0.75);
  background-color: ${props => props.theme.buttonColors.white};
  display: flex;
  border-radius: 0.25rem;
  flex-flow: column wrap;
  transition: box-shadow 0.5s;
  &:hover {
    cursor: pointer;
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
  }
`

StudentCard.HobbiesTitle = styled.div`
  text-decoration: underline;
`

StudentCard.Title = styled.div`
  margin-bottom: ${props => props.theme.spacing.basePlusXs};
`

StudentCard.Content = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 1rem 1rem 0.5rem;
`

StudentCard.HobbiesContainer = styled.div`
  flex: 1 1 auto;
  line-height: 1.5;
  margin-bottom: ${props => props.theme.spacing.xs};
`

StudentCard.Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${props => props.theme.spacing.basePlusXs};
  border-top: 1px solid ${props => props.theme.textColors.lightGrey};
`

StudentCard.propTypes = {
  firstname: PropTypes.string,
  altText: PropTypes.string,
  lastname: PropTypes.string,
  birthdate: PropTypes.number,
  photoUrl: PropTypes.string,
  hobbies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string
    })
  )
}
