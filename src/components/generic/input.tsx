import * as React from 'react'
import styled from 'styled-components'
import { fontSize, fontWeight, textAlign } from 'styled-system'

import { ChangeEventHandler } from 'react'
import { formElementBorders, formElementSpace } from '../presets'
import { Flex, FlexProps } from './flex'
import { TextProps } from './text'

type InputProps = TextProps &
  FlexProps & {
    placeholder?: string
    placeholderColor?: string
    name?: string
    type?: string
    autoFocus?: boolean
    value?: string
    autoComplete?: string
    onChange?: ChangeEventHandler
    error?: boolean
    onBlur?(ev: any): void
  }

export const Input = styled(Flex).attrs(({ theme, error, ...rest }: any) => ({
  as: 'input',
  ...formElementSpace,
  ...formElementBorders(error),
  ...rest,
}))`
  font-size: 18px;
  font-weight: 300;
  ${fontSize}
  ${fontWeight}
  ${textAlign}
  ${({ placeholderColor = 'lightgray' }: InputProps) =>
    placeholderColor
      ? `
    ::placeholder {color: ${placeholderColor};}
    :-ms-input-placeholder { /* Internet Explorer 10-11 */ 
        color: ${placeholderColor}; 
    } 
    ::-ms-input-placeholder { /* Microsoft Edge */ 
        color: ${placeholderColor}; 
    }
    `
      : ''}
  
     width: 100%;  
  
    // focus
    outline: none;
    transition: all 0.3s ease;
  
    :focus {
     border-color: ${({ theme, error }: any) =>
       error ? theme.colors.error : theme.colors.primary[0]}; 
  }
` as React.FC<InputProps>
