import { render, screen, fireEvent } from '@testing-library/react'
import { HorseItem } from './HorseItem'

const horse = {
  id: 'd21ee5ce-13b9-48de-92f8-4f6c6750d5b5',
  name: 'Shorty',
  profile: {
    favouriteFood: 'Kebabs',
    physical: {
      height: 180.66,
      weight: 500.23,
    },
  },
}

test('renders HorseItem component', () => {
  const handleOnView = jest.fn()
  const handleOnDelete = jest.fn()

  render(
    <HorseItem
      id={horse.id}
      name={horse.name}
      favouriteFood={horse.profile.favouriteFood}
      onViewHorse={handleOnView}
      onDeleteHorse={handleOnDelete}
    />,
  )

  expect(screen.getByText('Shorty')).toBeInTheDocument()
  expect(screen.getByText('Kebabs')).toBeInTheDocument()

  const viewButton = screen.getByTestId('horse-item-viewbtn')
  const deleteButton = screen.getByTestId('horse-item-deletebtn')

  expect(viewButton).toBeInTheDocument()
  fireEvent.click(viewButton)
  expect(handleOnView).toHaveBeenCalledTimes(1)

  expect(deleteButton).toBeInTheDocument()
  fireEvent.click(deleteButton)
  expect(handleOnDelete).toHaveBeenCalledTimes(1)
})
