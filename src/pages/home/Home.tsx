import { Container } from '@mantine/core'

import { Hero, ErrorBoundary } from '@/components'
import { Horses } from './containers'
import { useStyles } from './styles'

export const Home = () => {
  const { classes } = useStyles()

  return (
    <Container className={classes.content}>
      <Hero />
      <ErrorBoundary>
        <Horses perPage={10} />
      </ErrorBoundary>
    </Container>
  )
}
