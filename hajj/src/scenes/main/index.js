import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'

export default class Main extends Component {
  state = {
    visaNumber: '',
    passport: '',
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
            <Image
              source={require('./images/sendMessage.png')}
              style={styles.icon}
            />
            <View style={{ marginLeft: 20 }}>
              <Text style={styles.contentTitle}>Hashem El-Jarhy</Text>
              <Text style={styles.contentSubTitle}>Al-Mutawf Group C104</Text>
              <Text style={styles.contentNote}>
                We’ll now start the duaa for the people that we love.. Feel free
                to express yourself.
              </Text>
              <Text style={styles.contentTime}>10 minutes ago</Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Chat')
            }}
            style={styles.contentBottom}
          >
            <Text style={styles.buttonContainer}>REPLY TO HASHEM</Text>
            <Image
              source={require('./images/sendMessage.png')}
              style={styles.smallIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1 }}>
          <Image
            source={require('./images/group_3.png')}
            style={styles.bigIcon}
          />
        </View>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#00a4ce' }]}
          onPress={() => {
            this.props.navigation.navigate('Main')
          }}
        >
          <Text style={styles.buttonText}>Chat with Belal</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#4abc96' }]}
        >
          <Text style={styles.buttonText}>I NEED MEDICS</Text>
          <Image
            source={require('./images/sendMessage.png')}
            style={styles.smallIcon}
          />
        </TouchableOpacity>
      </View>
    )
  }
}
