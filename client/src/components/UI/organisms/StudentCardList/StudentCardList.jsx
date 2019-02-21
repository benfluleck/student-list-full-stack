import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import StudentCard from '<molecules>/StudentCard/StudentCard'

function StudentCardList ({ studentCards }) {
  const renderStudentCards = studentCards.map((student, index) =>
    <StudentCard
      key={`${index}+${student.firstname}`}
      firstname={student.firstname}
      photoUrl={student.photoUrl}
      lastname={student.lastname}
      birthdate={student.birthdate}
      hobbies={student.hobbies}
    />)
  return (
    <StudentCardList.Container>
      {renderStudentCards}
    </StudentCardList.Container>
  )
}

StudentCardList.propTypes = {
  studentCards: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  )
}

StudentCardList.Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 30px;
  padding: 40px;
`

export default StudentCardList
