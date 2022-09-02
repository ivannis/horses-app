import { render, screen, within } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Header } from './Header'

const links = [
  { link: '/', label: 'Home' },
  { link: '/about', label: 'About' },
]

test('renders Header component', () => {
  render(<Header name='MyApp' links={links} />, { wrapper: BrowserRouter })

  const linksElement = screen.getByTestId('header-links')

  expect(linksElement).toBeInTheDocument()
  expect(screen.getByTestId('header-menu')).toBeInTheDocument()
  expect(screen.getByText('MyApp')).toBeInTheDocument()

  links.forEach(({ label }) => {
    expect(within(linksElement).queryByTestId(`link-${label}`)).not.toBeNull()
  })
})
