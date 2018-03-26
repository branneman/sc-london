import React from 'react'
import { Image, View } from 'react-native'
import styles from './LogoStyles'

export default class Logo extends React.Component {
  render() {
    return (
      <View style={styles.view}>
        <Image style={styles.img} source={require('./logo.png')} />
      </View>
    )
  }
}
