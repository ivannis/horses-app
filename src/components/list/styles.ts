import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  horseItem: {
    display: 'block',
    width: '100%',
    padding: theme.spacing.md,
    color: theme.black,
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: theme.colors.gray[0],
    },
  },
  horseItemPlaceholderContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
}))
