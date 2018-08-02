import firebase from 'firebase'

this.initialised = false

const initApp = () => {
  if (this.initialised) return
  var config = {
    apiKey: 'AIzaSyCW8ZFlQSmBhdbR7Y4phrJXcK_kAD5Jfuc',
    authDomain: 'hajjbeacon.firebaseapp.com',
    databaseURL: 'https://hajjbeacon.firebaseio.com',
    projectId: 'hajjbeacon',
    storageBucket: 'hajjbeacon.appspot.com',
    messagingSenderId: '1068068964104',
  }

  firebase.initializeApp(config)
  this.initialised = true
}

const listenToNode = (path, callback) => {
  firebase
    .database()
    .ref(path)
    .on('value', function(snap) {
      callback(snap.val())
    })
}

const getNode = path => {
  return firebase
    .database()
    .ref(path)
    .once('value')
    .then(data => data.val())
}

const add = (path, obj) => {
  console.log(obj)
  firebase
    .database()
    .ref(path)
    .push(obj)
}

const time = firebase.database.ServerValue.TIMESTAMP

export default {
  initApp,
  listenToNode,
  getNode,
  add,
  time,
}
