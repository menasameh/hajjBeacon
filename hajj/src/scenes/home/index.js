import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import styles from './styles'

export default class HomeScreen extends Component {
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
      </View>
    )
  }
}
