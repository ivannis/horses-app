import { FC } from 'react'
import { List } from '@mantine/core'
import { HorseItem, HorseItemPlaceholder } from './HorseItem'
import { Horse } from '@/services'

type HorseListProps = {
  horses: Horse[]
  onViewHorse?: (id: string) => void
  onDeleteHorse?: (id: string) => void
}

export const HorseList: FC<HorseListProps> = ({ horses, onViewHorse, onDeleteHorse }) => {
  return (
    <List spacing='xs' size='xl' center data-testid='horse-list'>
      {horses.map(({ id, name, profile: { favouriteFood } }) => {
        return (
          <List.Item key={id} data-testid='horse-item' style={{ listStyle: 'none' }}>
            <HorseItem
              id={id}
              name={name}
              favouriteFood={favouriteFood}
              onViewHorse={onViewHorse}
              onDeleteHorse={onDeleteHorse}
            />
          </List.Item>
        )
      })}
    </List>
  )
}

type HorseListPlaceholderProps = {
  count?: number
}

export const HorseListPlaceholder: FC<HorseListPlaceholderProps> = ({ count = 4 }) => {
  const placeholders = new Array(count).fill('')

  return (
    <List spacing='xs' size='xl' center>
      {placeholders.map((_item, index) => {
        return (
          <List.Item key={index} style={{ listStyle: 'none' }}>
            <HorseItemPlaceholder />
          </List.Item>
        )
      })}
    </List>
  )
}
