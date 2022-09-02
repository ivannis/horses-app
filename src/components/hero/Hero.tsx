import { Image, Container, Title, Button, Group, Text } from '@mantine/core'
import { useStyles } from './styles'
import image from './image.svg'

export const Hero = () => {
  const { classes } = useStyles()
  return (
    <Container>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title data-testid='hero-title' className={classes.title}>
            A <span className={classes.highlight}>modern</span> React components library
          </Title>
          <Text data-testid='hero-description' color='dimmed' mt='md'>
            Build fully functional accessible web applications faster than ever – Mantine includes more than 120
            customizable components and hooks to cover you in any situation
          </Text>

          <Group mt={30}>
            <Button data-testid='hero-button' radius='xl' size='md' className={classes.control}>
              Get started
            </Button>
          </Group>
        </div>
        <Image data-testid='hero-image' src={image} className={classes.image} />
      </div>
    </Container>
  )
}
