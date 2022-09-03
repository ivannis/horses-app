import { FC, ReactElement } from 'react'
import { ErrorBoundary as ReactErrorBoundary, FallbackProps } from 'react-error-boundary'
import { useQueryErrorResetBoundary } from '@tanstack/react-query'
import { Button, Alert, Stack } from '@mantine/core'

const ErrorFallback: FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <Alert title='Something went wrong' color='red' mt='lg'>
      <Stack>
        {error.message}
        <Button onClick={resetErrorBoundary} color='blue'>
          Try again
        </Button>
      </Stack>
    </Alert>
  )
}

type ErrorBoundaryProps = {
  children: ReactElement | ReactElement[]
}

export const ErrorBoundary: FC<ErrorBoundaryProps> = ({ children }) => {
  const { reset } = useQueryErrorResetBoundary()

  return (
    <ReactErrorBoundary onReset={reset} FallbackComponent={ErrorFallback}>
      {children}
    </ReactErrorBoundary>
  )
}
