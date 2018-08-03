import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Animated,
} from 'react-native'
import styles from './styles'
import Modal from 'react-native-modal'
import { beacons, firebase } from '../../utils'

export default class HomeScreen extends Component {
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
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Image source={require('./images/logo.png')} style={styles.logo} />
          <TextInput
            placeholderTextColor="#b2b2b2"
            style={styles.textInput}
            onChangeText={data => this.setState({ visaNumber: data })}
            value={this.state.visaNumber}
            placeholder="Hajj Visa Number"
          />
          <TextInput
            placeholderTextColor="#b2b2b2"
            style={styles.textInput}
            onChangeText={data => this.setState({ passport: data })}
            value={this.state.passport}
            placeholder={'Passport Number'}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('Main')
            }}
          >
            <Text style={styles.buttonText}>Start Hajj Journey</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#00a4ce' }]}
          >
            <Text style={styles.buttonText}>Chat with Belal</Text>
          </TouchableOpacity>
        </View>
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
    )
  }
}
