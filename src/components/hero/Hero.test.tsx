import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

test('renders Hero component', () => {
  render(<Hero />)

  expect(screen.getByTestId('hero-title')).toBeInTheDocument()
  expect(screen.getByTestId('hero-description')).toBeInTheDocument()
  expect(screen.getByTestId('hero-button')).toBeInTheDocument()
  expect(screen.getByTestId('hero-image')).toBeInTheDocument()

  expect(screen.getByText(/React components library/i)).toBeInTheDocument()
})
