import * as React from 'react'
import styled from 'styled-components'
import { Flex, FlexProps } from './flex'

type FormProps = FlexProps & {
  onSubmit: any
}

export const Component: React.FC<FormProps> = styled(Flex).attrs(
  ({ theme, ...rest }) => ({
    as: 'form',
    ...rest,
  })
)``

export const Form: React.FC<FormProps> = ({ children, onSubmit, ...props }) => {
  const handleSubmit = (e: any) => {
    if (e) {
      e.preventDefault()
    }
    onSubmit(e)
  }
  return (
    <Component {...props} onSubmit={handleSubmit}>
      {children}
      <button hidden type={'submit'} onClick={handleSubmit} />
    </Component>
  )
}
