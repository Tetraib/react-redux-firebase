import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { routerReducer, syncHistoryWithStore } from 'react-router-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { browserHistory } from 'react-router'

import getRoutes from './config/routes'
import * as reducers from 'redux/modules'

injectTapEventPlugin()

const store = createStore(combineReducers({...reducers, routing: routerReducer}), compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
))

const history = syncHistoryWithStore(browserHistory, store)

const App = () => {
  return (
    <Provider store={store}>
      <MuiThemeProvider>
        {getRoutes(history)}
      </MuiThemeProvider>
    </Provider>
  )
}

ReactDOM.render(<App/>, document.getElementById('app'))
