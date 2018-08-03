import React, { Component } from 'react'
import RootStack from './src/navigation'
import reducer from './src/reducers'
import { Provider } from 'react-redux'

import { applyMiddleware, createStore } from 'redux'

import logger from 'redux-logger'
import Modal from 'react-native-modal'
import { beacons, firebase } from './src/utils'

const store = createStore(reducer, applyMiddleware(logger))

export default class App extends Component {
  constructor(props) {
    super(props)
    this.keyboardHeight = new Animated.Value(0)
    this.state = {
      message: '',
      isShown: false,
    }
  }

  currentState = 'init'

  getState = distance => {
    return distance > 0.5 ? 'out' : 'in'
  }

  componentDidMount() {
    beacons.requestPermission()
    beacons.startBeacons()
    beacons.registerBeaconsListeners(distance => {
      if (this.currentState === 'init') {
        this.currentState = this.getState(distance)
      } else if (this.currentState === 'in') {
        state = this.getState(distance)
        if (state === 'out') {
          this.currentState = this.getState(distance)
          this.setState({
            message: 'You left the area',
            isShown: true,
          })
          //departure
        }
      } else if (this.currentState === 'out') {
        state = this.getState(distance)
        if (state === 'in') {
          this.currentState = this.getState(distance)
          this.setState({
            message: 'You entered the area',
            isShown: true,
          })
          //arrival
        }
      }
    })
  }

  componentWillUnmount() {
    beacons.stopBeacons()
    beacons.removeListeners()
  }
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <RootStack />
          <Modal isVisible={this.state.isShown}>
            <View
              style={{
                backgroundColor: '#ffffff',
                borderRadius: 10,
                marginHorizontal: 20,
              }}
            >
              <Text style={{ margin: 20, fontSize: 20, color: '#178967' }}>
                {this.state.message}
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: '#178967',
                  height: 50,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({ isShown: false })
                }}
              >
                <Text style={{ color: '#ffffff', fontSize: 20 }}>Ok</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
      </Provider>
    )
  }
}
