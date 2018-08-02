import { StyleSheet } from 'react-native'
const headerHeight = 65
export const imageSourceIconWidth = 24

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 184,
    height: 192,
    marginTop: 10,
    marginBottom: 30,
  },
  button: {
    height: 60,
    borderRadius: 8,
    marginVertical: 5,
    backgroundColor: '#000000',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '900',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#ffffff',
  },
  headerContainer: {
    height: 300,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#178967',
  },
  smallText: {
    fontFamily: 'Montserrat',
    fontSize: 12,
    color: '#ffffff',
  },
  midText: {
    fontFamily: 'Montserrat',
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
    marginTop: 70,
    marginBottom: -7,
  },
  largeText: {
    fontFamily: 'Montserrat',
    fontSize: 36,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: -7,
  },
  textIn: {
    fontFamily: 'Montserrat',
    fontSize: 12,
    fontWeight: '600',
    color: '#178967',
    paddingVertical: 16,
    paddingHorizontal: 26,
    marginTop: 15,
    backgroundColor: '#ffffff',
    borderRadius: 8,
  },
  contentContainer: {
    marginBottom: 15,
    marginHorizontal: 15,
  },
  contentUpper: {
    backgroundColor: '#ffffff',
    height: 130,
    marginTop: -70,
    borderColor: '#006d4b',
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentBottom: {
    backgroundColor: '#006d4b',
    height: 60,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  icon: {
    width: 67,
    height: 67,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: '#ff0fff',
  },

  ////content
  contentTitle: {
    fontFamily: 'Montserrat',
    fontSize: 14,
    fontWeight: '600',
    color: '#178967',
  },
  contentSubTitle: {
    fontFamily: 'Montserrat',
    fontSize: 10,
    color: '#474747',
  },
  contentNote: {
    opacity: 0.52,
    fontFamily: 'Montserrat',
    fontSize: 10,
    color: '#474747',
    marginRight: 100,
  },
  contentTime: {
    fontFamily: 'Montserrat',
    fontSize: 10,
    fontStyle: 'italic',
    color: '#178967',
  },
})

export default styles
