import React from 'react'
import { Text, View } from 'react-native'
import data from '../../data'
import style from './LocationStyles'

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Location'
  }

  render() {
    return (
      <View style={style.container}>
        <Text>MAP</Text>
      </View>
    )
  }
}
