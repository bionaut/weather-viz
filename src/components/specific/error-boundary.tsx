import * as React from 'react'
import { Text } from '../generic'

type ErrorBoundaryState = {
  hasError: boolean
}

export class ErrorBoundary extends React.Component<{}, ErrorBoundaryState> {
  private static getDerivedStateFromError(error: any) {
    return {
      hasError: true,
    }
  }
  constructor(props: {}) {
    super(props)

    this.state = {
      hasError: false,
    }
  }

  public render() {
    if (this.state.hasError) {
      return <Text color={'error'}>Something Went Wrong!</Text>
    }

    return this.props.children
  }
}
