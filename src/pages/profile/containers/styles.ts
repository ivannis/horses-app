import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colors.gray[0],
  },

  label: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
    lineHeight: 1,
  },

  inner: {
    display: 'flex',

    [theme.fn.smallerThan(350)]: {
      flexDirection: 'column',
    },
  },

  space: {
    flex: 1,
    display: 'flex',
    flexGrow: 1,
  },

  right: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
}))
