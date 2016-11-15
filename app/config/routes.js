import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import { Default } from 'components'
import { MainContainer } from 'containers'

const getRoutes = (history) => {
  return (
    <Router history={history}>
      <Route path='/' component={MainContainer}>
        <IndexRoute component={Default} />
      </Route>
    </Router>
  )
}

export default getRoutes
