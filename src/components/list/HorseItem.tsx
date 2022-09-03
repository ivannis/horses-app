import { FC } from 'react'
import { Text, Group, Avatar, Button, Skeleton, Stack } from '@mantine/core'
import { useStyles } from './styles'
import image from './image.svg'

type HorseItemProps = {
  id: string
  name: string
  favouriteFood: string
  onViewHorse?: (id: string) => void
  onEditHorse?: (id: string) => void
  onDeleteHorse?: (id: string) => void
}

export const HorseItem: FC<HorseItemProps> = ({
  id,
  name,
  favouriteFood,
  onViewHorse = () => {},
  onEditHorse = () => {},
  onDeleteHorse = () => {},
}) => {
  const { classes } = useStyles()

  const handleOnView = () => {
    onViewHorse(id)
  }

  const handleOnEdit = () => {
    onEditHorse(id)
  }

  const handleOnDelete = () => {
    onDeleteHorse(id)
  }

  return (
    <div className={classes.horseItem}>
      <Group>
        <Avatar src={image} radius='xl' />

        <div style={{ flex: 1 }}>
          <Text size='sm' weight={500}>
            {name}
          </Text>

          <Text color='dimmed' size='xs'>
            {favouriteFood}
          </Text>
        </div>

        <Group>
          <Button variant='light' data-testid='horse-item-viewbtn' color='gray' onClick={handleOnView} compact>
            view
          </Button>
          <Button variant='light' data-testid='horse-item-editbtn' color='gray' onClick={handleOnEdit} compact>
            edit
          </Button>
          <Button variant='light' data-testid='horse-item-deletebtn' color='red' onClick={handleOnDelete} compact>
            delete
          </Button>
        </Group>
      </Group>
    </div>
  )
}

export const HorseItemPlaceholder = () => {
  const { classes } = useStyles()

  return (
    <div className={classes.horseItem}>
      <Group>
        <Skeleton height={42} circle />
        <Stack spacing='xs' style={{ flex: 1 }}>
          <Skeleton height={16} width={180} radius='sm' />
          <Skeleton height={8} width={120} radius='sm' />
        </Stack>
        <Group>
          <Skeleton width={52} height={21} radius='md' />
          <Skeleton width={52} height={21} radius='md' />
        </Group>
      </Group>
    </div>
  )
}
