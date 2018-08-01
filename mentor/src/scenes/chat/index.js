import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Animated,
  FlatList,
} from 'react-native'
import styles from './styles'
import _ from 'underscore'

import { beacons, firebase } from '../../utils'

export default class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.keyboardHeight = new Animated.Value(0)
    this.state = {
      messages: [{ message: 'somcvdc text', sender: 'motawef' }],
      messageToSend: '',
      isKeyboardOpen: false,
    }
  }

  componentDidMount() {
    firebase.initApp()
    beacons.requestPermission()
    beacons.startBeacons()
    beacons.registerBeaconsListeners()
    firebase.listenToNode('chat', messages => {
      console.log(messages)
      this.setState({
        messages: Object.keys(messages).map(key => ({
          ...messages[key],
          id: key,
        })),
      })
    })
    this.keyboardWillShowListener = Keyboard.addListener(
      'keyboardWillShow',
      this.keyboardWillShow.bind(this)
    )
    this.keyboardWillHideListener = Keyboard.addListener(
      'keyboardWillHide',
      this.keyboardWillHide.bind(this)
    )
  }

  componentWillUnmount() {
    beacons.stopBeacons()
    beacons.removeListeners()
    this.keyboardWillShowListener.remove()
    this.keyboardWillHideListener.remove()
  }

  keyboardWillShow(event) {
    this.setState({ isKeyboardOpen: true })
    Animated.timing(this.keyboardHeight, {
      duration: event.duration,
      toValue: event.endCoordinates.height - 50,
    }).start()
  }

  keyboardWillHide(event) {
    this.setState({ isKeyboardOpen: false })
    Animated.timing(this.keyboardHeight, {
      duration: event.duration,
      toValue: 0,
    }).start()
  }

  _renderItem = ({ item }) => {
    return <Text>{`msg: ${item.message}, sender: ${item.sender}`}</Text>
  }

  _sendMessage = _ => {
    if (this.state.messageToSend.trim().length) {
      firebase.add('chat', {
        message: this.state.messageToSend.trim(),
        sender: 'hajj 1',
      })
      this.setState({
        messageToSend: '',
      })
    }
  }

  _renderAccessoryButton() {
    if (!this.state.messageToSend.trim().length) return null
    return (
      <TouchableOpacity
        onPress={this._sendMessage}
        style={styles.sendButtonContainer}
      >
        <Image
          style={styles.sendButton}
          source={require('./images/sendMessage.png')}
        />
      </TouchableOpacity>
    )
  }

  _onMessageTextChanged = messageToSend => this.setState({ messageToSend })

  _renderFooter() {
    return (
      <Animated.View
        style={[{ marginBottom: this.keyboardHeight }, styles.footerContainer]}
      >
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            multiline
            style={[styles.baseTextInput, styles.messageTextInput]}
            onChangeText={this._onMessageTextChanged}
            value={this.state.messageToSend}
            placeholder={'send a message'}
          />
        </View>
        {this._renderAccessoryButton()}
      </Animated.View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          inverted
          data={this.state.messages}
          renderItem={this._renderItem}
          style={styles.resultsListContainer}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={true}
        />
        {this._renderFooter()}
      </View>
    )
  }
}
