import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  horseItem: {
    display: 'block',
    width: '100%',
    padding: theme.spacing.md,
    color: theme.black,
    borderColor: theme.colors.gray[0],
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
  },
  horseItemPlaceholderContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
}))
