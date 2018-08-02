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

export default class Main extends Component {
  constructor(props) {
    super(props)
    firebase.initApp()
  }
  state = {
    messageToSend: '',
  }

  _sendMessage = _ => {
    const message = this.state.messageToSend.trim().slice()
    if (this.state.messageToSend.trim().length) {
      firebase
        .getNode('chat')
        .then(data => {
          console.log(data)
          Object.keys(data).forEach(item => {
            firebase.add(`chat/${item}`, {
              message,
              sender: 'mentor',
              time: firebase.time,
            })
          })
        })
        .catch(error => {
          console.log(error)
        })

      this.setState({
        messageToSend: '',
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={{ marginLeft: 20, marginRight: -20 }}>
            <Text style={styles.midText}>Yuwm El-Tarweyah</Text>
            <Text style={styles.largeText}>12:30 PM</Text>
            <Text style={styles.smallText}>8 Dhu al-Hijjah 1439 AH</Text>
            <Text style={styles.textIn}>Phase Information</Text>
          </View>
          <View style={{ flex: 1 }} />
          <Image
            source={require('./images/hero_img.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.contentUpper}>
            <TextInput
              style={{
                alignSelf: 'stretch',
                fontSize: 20,
              }}
              placeholder="Announce something... "
              value={this.state.messageToSend}
              onChangeText={messageToSend => {
                this.setState({ messageToSend })
              }}
            />
          </View>

          <TouchableOpacity
            onPress={() => {
              this._sendMessage()
            }}
            style={styles.contentBottom}
          >
            <Text style={styles.buttonContainer}>Submit</Text>
            <Image
              source={require('./images/sendMessage.png')}
              style={styles.smallIcon}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Chat')
          }}
          style={{ flex: 1 }}
        >
          <Image
            source={require('./images/group_3.png')}
            style={styles.bigIcon}
          />
        </TouchableOpacity>
      </View>
    )
  }
}
