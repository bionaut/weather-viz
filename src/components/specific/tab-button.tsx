import * as React from 'react'
import { Button, ButtonProps } from '../generic/button'

type TabButtonProps = ButtonProps & { active?: boolean }

export const TabButton: React.FC<TabButtonProps> = ({
  active,
  children,
  ...rest
}) => {
  return (
    <Button
      px={20}
      height={50}
      borderBottom={'5px solid'}
      borderColor={active ? 'primary.0' : 'transparent'}
      {...rest}
    >
      {children}
    </Button>
  )
}
