import React from 'react'
import styled from 'styled-components'
import { Query } from 'react-apollo'

import Modal from '<atoms>/Modal/Modal'
import Text from '<atoms>/Text/Text'
import Button from '<atoms>/Button/Button'
import StudentCardList from '<organisms>/StudentCardList/StudentCardList'
import GET_ALL_STUDENTS from '<graphql>/getAllStudents.graphql'

class HomePage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false,
      children: null
    }
    this.handleCloseModal = this.handleCloseModal.bind(this)
    this.handleShowMessageClick = this.handleShowMessageClick.bind(this)
  }

  handleShowMessageClick () {
    this.setState({ showModal: true, children: (<h1>Hello</h1>) })
  }

  handleCloseModal () {
    this.setState({ showModal: false })
  }

  render () {
    return (
      <HomePage.Container>
        <HomePage.NavBar>
          <Text fontSize="xsMd" fontWeight="bold">Student List</Text>
          <Button backgroundColor="white" color="orange" onClick={this.handleShowMessageClick}>Add Button</Button>
        </HomePage.NavBar>
        <HomePage.Content>
          <Query query={GET_ALL_STUDENTS}>
            {({ data, loading }) => {
              if (loading) {
                return <div>Loading ...</div>
              }
              const { getAllStudents: studentCards } = data
              return <StudentCardList studentCards={studentCards} />
            }}
          </Query>
        </HomePage.Content>
        <HomePage.Footer />
        {this.state.showModal ? (
          <Modal handleClose={this.handleCloseModal}>
            {this.state.children}
          </Modal>
        ) : null}
      </HomePage.Container>
    )
  }
}

HomePage.Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "nav"
    "content"
    "footer";
  height: 100vh;
`
HomePage.NavBar = styled.div`

  border-bottom: 1px solid ${props => props.theme.buttonColors.primary};
  grid-area: nav;
  padding: 0.5rem 2.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

HomePage.Content = styled.div`
  grid-area: content;
`

HomePage.Footer = styled.div`
${props => {
    const { theme } = props
    const { buttonColors, spacing } = theme
    return `
    background: ${buttonColors.primary};
    padding: ${spacing.basePlusXs};
    grid-area: footer;
  `
  }}
`

export default HomePage
