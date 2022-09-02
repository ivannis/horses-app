import { FC } from 'react'
import { Header as BaseHeader, Container, Group, Burger } from '@mantine/core'
import { Link, useLocation } from 'react-router-dom'
import { useDisclosure } from '@mantine/hooks'
import { useStyles } from './styles'

type HeaderProps = {
  name: string
  links: { link: string; label: string }[]
}

export const Header: FC<HeaderProps> = ({ name, links }) => {
  const { pathname } = useLocation()
  const [opened, { toggle }] = useDisclosure(false)
  const { classes, cx } = useStyles()

  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      data-testid={`link-${link.label}`}
      className={cx(classes.link, { [classes.linkActive]: link.link === pathname })}
    >
      <span>{link.label}</span>
    </Link>
  ))

  return (
    <BaseHeader height={60}>
      <Container className={classes.header}>
        {name}
        <Group data-testid='header-links' spacing={5} className={classes.links}>
          {items}
        </Group>

        <Burger data-testid='header-menu' opened={opened} onClick={toggle} className={classes.burger} size='sm' />
      </Container>
    </BaseHeader>
  )
}
