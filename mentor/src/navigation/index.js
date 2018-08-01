import { StackNavigator } from 'react-navigation'
import HomeScreen from '../scenes/home'
import { noHeader } from './styles'

export default StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: noHeader,
  },
})
