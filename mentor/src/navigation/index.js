import { StackNavigator } from 'react-navigation'
import HomeScreen from '../scenes/home'
import main from '../scenes/main'
import chat from '../scenes/chat'
import location from '../scenes/location'

import { noHeader } from './styles'

export default StackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: noHeader,
    },
    Main: {
      screen: main,
      navigationOptions: noHeader,
    },
    Chat: {
      screen: chat,
      navigationOptions: noHeader,
    },
    Location: {
      screen: location,
      navigationOptions: noHeader,
    },
  },
  {
    initialRouteName: 'Main',
  }
)
