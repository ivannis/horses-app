import { Container, Breadcrumbs, Text, Anchor, Box } from '@mantine/core'
import { useParams } from 'react-router-dom'

import { ErrorBoundary } from '@/components'
import { EditHorse } from './containers'
import { useStyles } from './styles'

export const Edit = () => {
  const { classes } = useStyles()
  const { horseId } = useParams()

  const renderItem = [
    { title: 'Home', href: '/' },
    { title: 'Horse profile', href: `/profile/${horseId}` },
    { title: 'Edit' },
  ].map(({ title, href }, index) => {
    if (href) {
      return (
        <Anchor href={href} key={index}>
          {title}
        </Anchor>
      )
    }

    return <Text key={index}>{title}</Text>
  })

  return (
    <Container>
      <Box className={classes.breadcrumb}>
        <Breadcrumbs>{renderItem}</Breadcrumbs>
      </Box>

      <ErrorBoundary>
        <EditHorse horseId={horseId as string} />
      </ErrorBoundary>
    </Container>
  )
}
