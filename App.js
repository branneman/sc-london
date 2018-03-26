import React from 'react'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'
import { StackNavigator } from 'react-navigation'

import HomeScreen from './app/screens/home/Home'
import ScheduleScreen from './app/screens/schedule/Schedule'
import TalkScreen from './app/screens/talk/Talk'
import LocationScreen from './app/screens/location/Location'

export default StackNavigator({
  Home: { screen: HomeScreen },
  Schedule: { screen: ScheduleScreen },
  Talk: { screen: TalkScreen },
  Location: { screen: LocationScreen }
})
