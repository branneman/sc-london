import React from 'react'
import { TouchableHighlight, Text, View } from 'react-native'
import styles from './ButtonStyles'

export default class Button extends React.Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.container}
        onPress={() =>
          this.props.navigate(this.props.screen, this.props.screenProps)
        }
      >
        <Text style={styles.txt}>{this.props.label}</Text>
      </TouchableHighlight>
    )
  }
}
