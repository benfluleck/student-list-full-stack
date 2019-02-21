import React, { Fragment } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import styled from 'styled-components'
import { ApolloProvider } from 'react-apollo'

import BaseRoute from './components/pages'
import GlobalStyle from '<styles>/global'
import { client } from '<core>/setup'
import ThemeWrapper from '<styles>/ThemeWrapper/ThemeWrapper'

const App = () => (
  <ApolloProvider client={client}>
    <ThemeWrapper>
      <Fragment>
        <GlobalStyle />
        <Router>
          <BaseRoute />
        </Router>
      </Fragment>
    </ThemeWrapper>
  </ApolloProvider>
)

App.Container = styled.div``

export default App

render(<App />, document.getElementById('app'))
