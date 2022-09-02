import { FC, ReactElement } from 'react'
import { Container } from '@mantine/core'

import { Header } from '../header'

type LayoutProps = {
  links: { link: string; label: string }[]
  children: ReactElement
}

export const Layout: FC<LayoutProps> = ({ links, children }) => {
  return (
    <>
      <Header name='App' links={links} />
      <Container>{children}</Container>
    </>
  )
}
