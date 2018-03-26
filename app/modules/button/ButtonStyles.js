import { Platform, StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    marginTop: 16,
    marginHorizontal: 16,
    ...Platform.select({
      android: {
        elevation: 4,
        borderRadius: 2,
        backgroundColor: '#fe4918'
      }
    })
  },
  txt: {
    padding: 16,
    fontSize: 14,
    color: '#fff'
  }
})
