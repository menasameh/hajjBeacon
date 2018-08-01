import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { DeviceEventEmitter } from 'react-native'
import Beacons from 'react-native-beacons-manager'
import { PermissionsAndroid } from 'react-native'

export default class HomeScreen extends Component {
  componentDidMount() {
    this.requestPermission()
    this.startBeacons()
    this.registerBeaconsListeners()
  }

  componentWillUnmount() {
    this.stopBeacons()
    this.removeListeners()
  }

  requestPermission = () => {
    try {
      const granted = PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'Activeev needs to access your location.',
        }
      )
      console.log('here', granted)
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location Permitted')
      } else {
        console.log('Location permission denied')
      }
    } catch (err) {
      console.warn(err)
    }
    PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    )
      .then(data => {
        console.log('success', data)
      })
      .catch(data => {
        console.log('fail', data)
      })
  }

  startBeacons = () => {
    Beacons.detectIBeacons()
    const identifier = 'HajjAndroid'
    const uuid = 'd77657c4-52a7-426f-b9d0-d71e10798c8a'
    region = {
      identifier,
      uuid,
    }
    Beacons.startMonitoringForRegion(region)
      .then(() => console.log('Beacons monitoring started succesfully'))
      .catch(error =>
        console.log(`Beacons monitoring not started, error: ${error}`)
      )
    Beacons.startRangingBeaconsInRegion(identifier, uuid)
      .then(() => console.log('Beacons ranging started succesfully'))
      .catch(error =>
        console.log(`Beacons ranging not started, error: ${error}`)
      )
    Beacons.checkTransmissionSupported()
      .then(data => {
        console.log('bluetooth', data)
      })
      .catch(error => {
        console.log('bluetooth', error)
      })
  }

  registerBeaconsListeners = () => {
    DeviceEventEmitter.addListener('beaconsDidRange', data => {
      if (data && data.beacons && data.beacons.length) {
        console.log('Found range!', data.beacons[0])
      }
    })
    DeviceEventEmitter.addListener('regionDidEnter', data => {
      console.log('Found enter!', data)
    })
    DeviceEventEmitter.addListener('regionDidExit', data => {
      console.log('Found exit!', data)
    })
  }

  stopBeacons = () => {
    Beacons.stopRangingBeaconsInRegion(identifier, uuid)
      .then(() => console.log('Beacons ranging stopped succesfully'))
      .catch(error =>
        console.log(`Beacons ranging not stopped, error: ${error}`)
      )

    // stop monitoring beacons:
    Beacons.stopMonitoringForRegion(region)
      .then(() => console.log('Beacons monitoring stopped succesfully'))
      .catch(error =>
        console.log(`Beacons monitoring not stopped, error: ${error}`)
      )
  }

  removeListeners = () => {
    this.beaconsDidRangeEvent.remove()
    this.regionDidEnterEvent.remove()
    this.regionDidExitEvent.remove()
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    )
  }
}
