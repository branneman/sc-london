import React from 'react'
import { Image, View } from 'react-native'
import { ListItem } from 'react-native-elements'
import style from './ScheduleItemStyles'

export default class ScheduleItem extends React.Component {
  static ICONS = {
    CHEVRON: require('./icon/chevron-right.png'),
    COFFEE: require('./icon/coffee.png'),
    BREAKFAST: require('./icon/food-croissant.png'),
    LUNCH: require('./icon/food.png'),
    DRINKS: require('./icon/glass-cocktail.png'),
    INFO: require('./icon/information-outline.png'),
    TALK: require('./icon/presentation.png')
  }

  render() {
    const item = this.props.item
    const icon = ScheduleItem.ICONS[item.type]
    const chevron = ScheduleItem.ICONS.CHEVRON

    const hideChevron = item.type !== 'TALK' ? { hideChevron: true } : {}

    return (
      <ListItem
        title={`${item.time} – ${item.title}`}
        subtitle={item.speaker ? item.speaker : ''}
        onPress={() =>
          item.type === 'TALK' && this.props.navigate('Talk', { item })
        }
        leftIcon={
          <View style={style.iconContainer}>
            <Image source={icon} style={style.icon} />
          </View>
        }
        rightIcon={<Image source={chevron} style={style.chevron} />}
        {...hideChevron}
      />
    )
  }
}
