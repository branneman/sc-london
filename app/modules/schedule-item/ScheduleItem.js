import React from 'react'
import { Icon, ListItem } from 'react-native-elements'
import style from './ScheduleItemStyles'

export default class ScheduleItem extends React.Component {
  static ICONS = {
    COFFEE: { name: 'coffee-outline', type: 'material-community' },
    BREAKFAST: { name: 'food-croissant', type: 'material-community' },
    LUNCH: { name: 'food', type: 'material-community' },
    DRINKS: { name: 'drink', type: 'entypo' },
    INFO: { name: 'info', type: 'entypo' },
    TALK: { name: 'presentation', type: 'material-community' }
  }

  render() {
    const item = this.props.item
    const icon = ScheduleItem.ICONS[item.type]

    const hideChevron = item.type !== 'TALK' ? { hideChevron: true } : {}

    return (
      <ListItem
        title={`${item.time} – ${item.title}`}
        subtitle={item.speaker ? item.speaker : ''}
        onPress={() =>
          item.type === 'TALK' && this.props.navigate('Talk', { item })
        }
        leftIcon={
          <Icon
            name={icon.name}
            type={icon.type}
            iconStyle={
              item.type === 'TALK' ? style.iconPrimary : style.iconSecondary
            }
            containerStyle={style.iconContainer}
          />
        }
        {...hideChevron}
      />
    )
  }
}
