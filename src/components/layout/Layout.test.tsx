import { Text } from '@mantine/core'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Layout } from './Layout'

const links = [
  { link: '/', label: 'Home' },
  { link: '/about', label: 'About' },
]

test('renders Layout component', () => {
  render(
    <Layout links={links}>
      <Text>Welcome</Text>
    </Layout>,
    { wrapper: BrowserRouter },
  )

  expect(screen.getByText('App')).toBeInTheDocument()
  expect(screen.getByText('Welcome')).toBeInTheDocument()
  expect(screen.getByText('Home')).toBeInTheDocument()
  expect(screen.getByText('About')).toBeInTheDocument()
})
