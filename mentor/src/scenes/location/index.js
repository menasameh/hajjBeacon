import React, { Component } from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native'
import styles from './styles'
import { firebase } from '../../utils'

export default class Location extends Component {
  sendLocation = () => {
    firebase.add('chat/john', {
      location: true,
      time: firebase.time,
    })
    this.props.navigation.goBack()
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            resizeMode: 'stretch',
          }}
          source={require('./images/map.png')}
        />
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            margin: 10,
            backgroundColor: '#006d4b',

            height: 60,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            this.sendLocation()
          }}
        >
          <Text style={{ color: '#ffffff' }}>Send location</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
