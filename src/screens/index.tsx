import * as React from 'react'
import { Fragment } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Header, SimpleLayout } from '../components'
import { defaultTheme, GlobalReset } from '../theme'
import { ChartViewScreen } from './chart'
import { TableViewScreen } from './table'

const Providers: React.FC = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    <Fragment>{children}</Fragment>
  </ThemeProvider>
)

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <GlobalReset />
        <SimpleLayout header={<Header />} accentColor={'white'}>
          <Switch>
            <Route exact path={'/table'} component={TableViewScreen} />
            <Route exact path={'/chart'} component={ChartViewScreen} />
            <Redirect path={'*'} to={'/table'} />
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
