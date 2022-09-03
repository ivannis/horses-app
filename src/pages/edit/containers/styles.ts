import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    marginBottom: theme.spacing.xl,
  },
  card: {
    backgroundColor: theme.colors.gray[0],
    padding: theme.spacing.xl * 2,
    position: 'relative',
  },
}))
