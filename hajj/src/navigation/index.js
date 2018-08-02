import { StackNavigator } from 'react-navigation'
import HomeScreen from '../scenes/home'
import Main from '../scenes/main'
import Chat from '../scenes/chat'
import { noHeader } from './styles'

export default StackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: noHeader,
    },
    Main: {
      screen: Main,
      navigationOptions: noHeader,
    },
    Chat: {
      screen: Chat,
      navigationOptions: noHeader,
    },
  },
  {
    initialRouteName: 'Home',
  }
)
