import { Container, Breadcrumbs, Text, Anchor, Box } from '@mantine/core'
import { useStyles } from './styles'

export const Profile = () => {
  const { classes } = useStyles()

  const renderItem = [{ title: 'Home', href: '/' }, { title: 'Horse profile' }].map(({ title, href }, index) => {
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

      <Text>Profile</Text>
    </Container>
  )
}
