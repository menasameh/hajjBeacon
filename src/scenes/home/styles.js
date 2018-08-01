import { StyleSheet } from 'react-native'
const headerHeight = 65
export const imageSourceIconWidth = 24

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  headerContainer: {
    height: 50,
    alignItems: 'stretch',
    justifyContent: 'flex-end',
    backgroundColor: {}.lightOffWhite,
  },
  headerContent: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  participantHeaderLine: {
    alignSelf: 'stretch',
    backgroundColor: {}.vividPurple,
    height: 1,
  },
  facilitatorHeaderLine: {
    alignSelf: 'stretch',
    backgroundColor: {}.brightSkyBlue,
    height: 1,
  },
  otherUserName: {
    fontFamily: {}.robotoBold,
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 14,
    color: {}.vividPurple,
    marginBottom: 4,
    marginHorizontal: 35,
  },
  otherUserImage: {
    width: 24,
    height: 24,
    marginBottom: 2,
    borderRadius: 24 / 2,
  },
  emptyListMessageContainer: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    marginHorizontal: 56,
  },
  emptyListMessageText: {
    fontFamily: {}.robotoRegular,
    fontSize: 17,
    lineHeight: 20,
    textAlign: 'center',
    color: {}.white,
  },
  listContainer: {
    flex: 1,
  },
  resultsListContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  footerContainer: {},
  iphoneXFooterContainer: {
    paddingBottom: 10,
  },
  baseTextInput: {
    backgroundColor: {}.white,
    fontFamily: {}.robotoRegular,
    fontSize: 14,
    lineHeight: 16,
    maxHeight: 64,

    borderRadius: 20,
    borderWidth: 1,
    borderColor: {}.mediumGrey,

    marginVertical: 10,
    marginLeft: 13,
    marginRight: 7,

    paddingLeft: 17,
    paddingRight: 30,
    flex: 1,
  },
  messageTextInput: {
    paddingTop: 7,
    paddingBottom: 5,
  },
  placeholderTextInput: {
    paddingVertical: 7,
  },
  sendButtonContainer: {
    position: 'absolute',
    right: 11,
    bottom: 13,
  },
  sendButton: {
    width: 23,
    height: 23,
  },
  messageImageContainer: {
    height: 80,
    backgroundColor: {}.mediumOffWhite,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: {}.mediumGrey,
  },
})

export default styles
