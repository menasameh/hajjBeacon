import { DeviceEventEmitter } from 'react-native'
import Beacons from 'react-native-beacons-manager'
import { PermissionsAndroid } from 'react-native'

const log = false

const requestPermission = () => {
  try {
    const granted = PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location Permission',
        message: 'hajb needs to access your location.',
      }
    )
    log && console.log('here', granted)
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      log && console.log('Location Permitted')
    } else {
      log && console.log('Location permission denied')
    }
  } catch (err) {
    log && console.warn(err)
  }
  PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
    .then(data => {
      log && console.log('success', data)
    })
    .catch(data => {
      log && console.log('fail', data)
    })
}

const startBeacons = () => {
  Beacons.detectIBeacons()
  const identifier = 'HajjAndroid'
  const uuid = 'd77657c4-52a7-426f-b9d0-d71e10798c8a'
  region = {
    identifier,
    uuid,
  }
  Beacons.startMonitoringForRegion(region)
    .then(() => log && console.log('Beacons monitoring started succesfully'))
    .catch(
      error =>
        log && console.log(`Beacons monitoring not started, error: ${error}`)
    )
  Beacons.startRangingBeaconsInRegion(identifier, uuid)
    .then(() => log && console.log('Beacons ranging started succesfully'))
    .catch(
      error =>
        log && console.log(`Beacons ranging not started, error: ${error}`)
    )
  Beacons.checkTransmissionSupported()
    .then(data => {
      log && console.log('bluetooth', data)
    })
    .catch(error => {
      log && console.log('bluetooth', error)
    })
}

const registerBeaconsListeners = () => {
  DeviceEventEmitter.addListener('beaconsDidRange', data => {
    if (data && data.beacons && data.beacons.length) {
      log && console.log('Found range!', data.beacons[0])
    }
  })
  DeviceEventEmitter.addListener('regionDidEnter', data => {
    log && console.log('Found enter!', data)
  })
  DeviceEventEmitter.addListener('regionDidExit', data => {
    log && console.log('Found exit!', data)
  })
}

const stopBeacons = () => {
  const identifier = 'HajjAndroid'
  const uuid = 'd77657c4-52a7-426f-b9d0-d71e10798c8a'
  region = {
    identifier,
    uuid,
  }
  Beacons.stopRangingBeaconsInRegion(identifier, uuid)
    .then(() => log && console.log('Beacons ranging stopped succesfully'))
    .catch(
      error =>
        log && console.log(`Beacons ranging not stopped, error: ${error}`)
    )

  // stop monitoring beacons:
  Beacons.stopMonitoringForRegion(region)
    .then(() => log && console.log('Beacons monitoring stopped succesfully'))
    .catch(
      error =>
        log && console.log(`Beacons monitoring not stopped, error: ${error}`)
    )
}

const removeListeners = () => {
  this.beaconsDidRangeEvent && this.beaconsDidRangeEvent.remove()
  this.regionDidEnterEvent && this.regionDidEnterEvent.remove()
  this.regionDidExitEvent && this.regionDidExitEvent.remove()
}

export default {
  requestPermission,
  startBeacons,
  registerBeaconsListeners,
  stopBeacons,
  removeListeners,
}
