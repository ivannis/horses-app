import { render, screen } from '@testing-library/react'
import { HorseList } from './HorseList'

const horses = [
  {
    id: '05723d26-6307-4199-bcee-11ddc0e7110d',
    name: 'Thunderdash',
    profile: {
      favouriteFood: 'Hot Chips',
      physical: {
        height: 200,
        weight: 450,
      },
    },
  },
  {
    id: '309289d3-be34-4b91-bc85-6b72056444c9',
    name: 'Artax',
    profile: {
      favouriteFood: 'Carrots',
      physical: {
        height: 198.99,
        weight: 400,
      },
    },
  },
  {
    id: '7f1d3a83-1476-4c49-a379-7472b31e49ce',
    name: 'Potoooooooo',
    profile: {
      favouriteFood: 'Potatoes',
      physical: {
        height: 205.44,
        weight: 423.44,
      },
    },
  },
]

test('renders HorseList component', () => {
  render(<HorseList horses={horses} />)

  const items = screen.getAllByTestId('horse-item')
  expect(items).toHaveLength(3)
})
