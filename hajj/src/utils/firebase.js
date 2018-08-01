import firebase from 'firebase'

const initApp = () => {
  var config = {
    apiKey: 'AIzaSyCW8ZFlQSmBhdbR7Y4phrJXcK_kAD5Jfuc',
    authDomain: 'hajjbeacon.firebaseapp.com',
    databaseURL: 'https://hajjbeacon.firebaseio.com',
    projectId: 'hajjbeacon',
    storageBucket: 'hajjbeacon.appspot.com',
    messagingSenderId: '1068068964104',
  }

  firebase.initializeApp(config)
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
}

const add = (path, obj) => {
  firebase
    .database()
    .ref(path)
    .push(obj)
}

export default {
  initApp,
  listenToNode,
  getNode,
  add,
}
