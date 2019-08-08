import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalReset = createGlobalStyle`
    ${reset};
    html { 
      font-size: calc(1em + 0.5vw);
      color: #3E3F42;
     }
`
