import React from 'react'
import ReactDOM from 'react-dom'
import { toast } from 'react-toastify'

import { Router } from './screens'
import * as serviceWorker from './serviceWorker'

// config toaster
import 'react-toastify/dist/ReactToastify.css'
toast.configure()

const isDev = process.env.NODE_ENV === 'development'
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(<Router />, rootEl)

// @ts-ignore
if (isDev && module.hot) {
  // @ts-ignore
  module.hot.accept('./screens', () => {
    render()
  })
}

render()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
