import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

test('renders App', () => {
  render(<App />, { wrapper: BrowserRouter })
  const linkElement = screen.getByText(/React components library/i)
  expect(linkElement).toBeInTheDocument()
})
