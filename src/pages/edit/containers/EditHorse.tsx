import { FC, Suspense, useState } from 'react'
import { Skeleton, LoadingOverlay } from '@mantine/core'

import { HorseForm } from '@/components'
import { useHorse, useUpdateHorse, Horse } from '@/services'
import { useStyles } from './styles'
import { useNavigate } from 'react-router-dom'

type EditHorseContainerProps = {
  horseId: string
}

const EditHorseContainer: FC<EditHorseContainerProps> = ({ horseId }) => {
  const { classes } = useStyles()
  const navigate = useNavigate()
  const horse = useHorse(horseId)
  const updateHorse = useUpdateHorse(horseId)

  const [visible, setVisible] = useState(false)

  const handleOnCancel = () => {
    navigate(`/profile/${horseId}`)
  }

  const handleOnSave = async (values: Horse) => {
    setVisible(true)
    // Simulate delay. Just for testing the LoadingOverlay
    await new Promise((resolve) => setTimeout(resolve, 500))

    await updateHorse(values)
    setVisible(false)
    navigate(`/profile/${horseId}`)
  }

  return (
    <div className={classes.card}>
      <LoadingOverlay visible={visible} overlayBlur={2} />
      <HorseForm horse={horse} onCancel={handleOnCancel} onSave={handleOnSave} />
    </div>
  )
}

export const EditHorse: FC<EditHorseContainerProps> = (props) => {
  return (
    <Suspense fallback={<Skeleton height={439} />}>
      <EditHorseContainer {...props} />
    </Suspense>
  )
}
