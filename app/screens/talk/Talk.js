import React from 'react'
import { Text, ScrollView } from 'react-native'
import style from './TalkStyles'

export default class Talk extends React.Component {
  static navigationOptions = {
    title: 'Talk'
  }

  render() {
    const item = this.props.navigation.state.params.item
    return (
      <ScrollView style={style.container}>
        <Text style={style.time}>{item.time}</Text>
        <Text style={style.title}>{item.title}</Text>
        <Text style={style.speaker}>{item.speaker.toUpperCase()}</Text>
        <Text style={style.desc}>{item.desc}</Text>
      </ScrollView>
    )
  }
}
