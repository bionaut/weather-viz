import * as React from 'react'
import { Fragment } from 'react'
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { client } from '../apollo'
import { Text, Flex, SimpleLayout, center } from '../components'
import { defaultTheme, GlobalReset } from '../theme'
import { HomeScreen } from './home'

const Providers: React.FC = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>{children}</ApolloHooksProvider>
    </ApolloProvider>
  </ThemeProvider>
)

const Header = () => (
  <Flex py={10} alignItems={'center'} flex={1} justifyContent={'space-between'}>
    <Flex
      {...center}
      width={50}
      height={50}
      borderRadius={25}
      background={'gray.2'}
    >
      <Text fontSize={10} color={'white'}>
        logo
      </Text>
    </Flex>
  </Flex>
)

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <GlobalReset />
        <SimpleLayout header={<Header />} accentColor={'primary.2'}>
          <Switch>
            <Route exact path={'/'} component={HomeScreen} />
            <Redirect path={'*'} to={'/'} />
          </Switch>
        </SimpleLayout>
      </Fragment>
    </BrowserRouter>
  )
}

export const Router = () => {
  return (
    <Providers>
      <Routes />
    </Providers>
  )
}
