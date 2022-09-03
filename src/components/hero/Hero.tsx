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
            The <span className={classes.highlight}>world’s</span> premier comparing horses platform
          </Title>
          <Text data-testid='hero-description' color='dimmed' mt='md'>
            A fully featured web platform to find the best horses in the world
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
