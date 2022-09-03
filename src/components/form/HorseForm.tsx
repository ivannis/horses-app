import { FC } from 'react'
import { Group, Button, TextInput, NumberInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { v4 as uuid } from 'uuid'
import { Horse } from '@/services'

type HorseFormProps = {
  horse?: Horse
  onCancel?: () => void
  onSave?: (horse: Horse) => void
}

const defaultValues = {
  id: uuid(),
  name: '',
  profile: {
    favouriteFood: '',
    physical: {
      weight: 0,
      height: 0,
    },
  },
}

export const HorseForm: FC<HorseFormProps> = ({ horse = defaultValues, onCancel = () => {}, onSave = () => {} }) => {
  const form = useForm({
    initialValues: horse,
    validate: {
      name: (value: string) => (value.length === 0 ? 'Name is required' : null),
    },
  })

  return (
    <form onSubmit={form.onSubmit(onSave)}>
      <TextInput label='Horse name' placeholder='Horse name' {...form.getInputProps('name')} withAsterisk />
      <TextInput
        label='Favourite food'
        placeholder='Type the horse favourite food'
        mt='md'
        {...form.getInputProps('profile.favouriteFood')}
      />
      <NumberInput
        label='Height'
        placeholder='Type the horse height'
        mt='md'
        precision={2}
        {...form.getInputProps('profile.physical.height')}
      />
      <NumberInput
        label='Weight'
        placeholder='Type the horse weight'
        mt='md'
        precision={2}
        {...form.getInputProps('profile.physical.weight')}
      />
      <Group position='right' mt='md'>
        <Button variant='default' color='dark' onClick={onCancel}>
          Cancel
        </Button>
        <Button type='submit'>Save</Button>
      </Group>
    </form>
  )
}
