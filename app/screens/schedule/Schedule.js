import React from 'react'
import { ScrollView, List, Text, View } from 'react-native'
import { ListItem } from 'react-native-elements'
import ScheduleItem from '../../modules/schedule-item/ScheduleItem'
import data from '../../data'
import style from './ScheduleStyles'

export default class Schedule extends React.Component {
  static navigationOptions = {
    title: 'Schedule'
  }

  render() {
    const { navigate } = this.props.navigation
    const navParams = this.props.navigation.state.params

    return (
      <View style={style.container}>
        <ScrollView>
          {data[navParams.day].map(item => (
            <ScheduleItem key={item.id} item={item} navigate={navigate} />
          ))}
        </ScrollView>
      </View>
    )
  }
}
