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

const me = 'john'

import { beacons, firebase } from '../../utils'

export default class locationHomeScreen extends Component {
  constructor(props) {
    super(props)
    this.keyboardHeight = new Animated.Value(0)
    this.state = {
      messages: [],
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
      messages = messages['john']
      console.log(messages)
      this.setState({
        messages: Object.keys(messages)
          .map(key => ({
            ...messages[key],
            id: key,
          }))
          .sort((a, b) => {
            return b.time - a.time
          }),
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
    this.keyboardWillShowListener && this.keyboardWillShowListener.remove()
    this.keyboardWillHideListener && this.keyboardWillHideListener.remove()
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
    if (item.location) {
      return (
        <Image
          style={{
            width: '80%',
            height: 150,
            resizeMode: 'contain',
          }}
          source={require('./images/chat_thread_baik.png')}
        />
      )
    }
    return (
      <Text
        style={[
          {
            padding: 20,
            borderRadius: 5,
            marginVertical: 5,
            fontSize: 20,
          },
          item.sender === me
            ? { marginLeft: 50, backgroundColor: '#ffffff' }
            : { marginRight: 50, backgroundColor: '#f6fffc' },
        ]}
      >
        {item.message}
      </Text>
    )
  }

  _sendMessage = _ => {
    if (this.state.messageToSend.trim().length) {
      //   this.props.sendMessage(this.state.messageToSend.trim())
      firebase.add('chat/john', {
        message: this.state.messageToSend.trim(),
        sender: me,
        time: firebase.time,
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
          <TouchableOpacity
            onPress={() => {
              console.log('adsf')
              this.props.navigation.navigate('Location')
            }}
            style={{
              width: 40,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'stretch',
            }}
          >
            <Image
              style={{
                width: 23,
                height: 23,
                marginTop: 20,
              }}
              source={require('./images/sendMessage.png')}
            />
          </TouchableOpacity>
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
