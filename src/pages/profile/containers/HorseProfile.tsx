import { FC, Suspense } from 'react'
import { Text, Card, Group, Stack, Avatar, Skeleton } from '@mantine/core'
import { IconCheese } from '@tabler/icons'

import image from '@/components/list/image.svg'
import { useHorse, Horse } from '@/services'
import { useStyles } from './styles'

type HorseContainerProps = {
  horseId: string
}

const HorseContainer: FC<HorseContainerProps> = ({ horseId }) => {
  const {
    name,
    profile: { favouriteFood, physical },
  } = useHorse<Horse>(horseId)
  const { classes } = useStyles()

  return (
    <Card p='xl' radius='md' className={classes.card}>
      <div className={classes.inner}>
        <div>
          <Text size='xl' className={classes.label}>
            {name}
          </Text>
          <Group spacing={5}>
            <IconCheese size={18} />
            <Text size='md' color='dimmed'>
              {favouriteFood}
            </Text>
          </Group>
          <Stack mt='lg'>
            <Group>
              <div>
                <Text size='md' color='dimmed'>
                  Weight
                </Text>
                <Text className={classes.label}>{physical.weight}</Text>
              </div>
              <div>
                <Text size='md' color='dimmed'>
                  Height
                </Text>
                <Text className={classes.label}>{physical.height}</Text>
              </div>
            </Group>
          </Stack>
        </div>
        <div className={classes.ring}>
          <Avatar src={image} radius='xl' />
        </div>
      </div>
    </Card>
  )
}

export const HorseProfile: FC<HorseContainerProps> = (props) => {
  return (
    <Suspense fallback={<Skeleton height={153} />}>
      <HorseContainer {...props} />
    </Suspense>
  )
}
