import React, { Component } from 'react'
import RootStack from './src/navigation'
import reducer from './src/reducers'
import { Provider } from 'react-redux'

import { applyMiddleware, createStore } from 'redux'

import logger from 'redux-logger'
const store = createStore(reducer, applyMiddleware(logger))

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    )
  }
}
