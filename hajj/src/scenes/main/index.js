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
  state = {
    visaNumber: '',
    passport: '',
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={{ marginLeft: 20 }}>
            <Text style={styles.midText}>Yuwm El-Tarweyah</Text>
            <Text style={styles.largeText}>12:30 PM</Text>
            <Text style={styles.smallText}>8 Dhu al-Hijjah 1439 AH</Text>
            <Text style={styles.textIn}>Phase Information</Text>
          </View>
          <View style={{ flex: 1 }} />
          <Image
            source={require('./images/sendMessage.png')}
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

          <View style={styles.contentBottom}>
            {/* <Image
              source={require('./images/sendMessage.png')}
              style={styles.logo}
            />
            <View style={{ flex: 1 }} />
            <View style={{ marginLeft: 20 }}>
              <Text style={styles.midText}>Yuwm El-Tarweyah</Text>
              <Text style={styles.largeText}>12:30 PM</Text>
              <Text style={styles.smallText}>8 Dhu al-Hijjah 1439 AH</Text>
              <Text style={styles.textIn}>Phase Information</Text>
            </View> */}
          </View>
        </View>
        <View>
          <Text> sdf</Text>
        </View>
      </View>
    )
  }
}
