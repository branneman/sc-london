import React from 'react'
import { Text, View } from 'react-native'
import Logo from '../../modules/logo/Logo'
import Button from '../../modules/button/Button'
import style from './HomeStyles'

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'SC London'
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={style.container}>
        <Logo />
        <Text style={style.title}>CONFERENCE</Text>
        <Button
          label="Schedule Day 1"
          screen="Schedule"
          screenProps={{ day: 1 }}
          navigate={navigate}
        />
        <Button
          label="Schedule Day 2"
          screen="Schedule"
          screenProps={{ day: 2 }}
          navigate={navigate}
        />
        {/* <Button label="Speakers" screen="Speakers" navigate={navigate} /> */}
        <Text style={style.title}>INFO</Text>
        <Button label="Location" screen="Location" navigate={navigate} />
      </View>
    )
  }
}
