import * as React from 'react'
import { ChangeEventHandler } from 'react'
import { Flex, FlexProps } from './flex'
import { Input } from './input'
import { Text } from './text'

type FieldProps = FlexProps & {
  name?: string
  placeholder?: string
  label?: React.ReactNode
  value?: string
  onChange?: ChangeEventHandler
  onBlur?: ChangeEventHandler
  horizontal?: boolean
  error?: string | boolean
}

export const Field: React.FC<FieldProps> = ({
  error,
  name,
  label,
  value,
  onChange,
  onBlur,
  horizontal,
  placeholder,
  children,
  ...rest
}) => {
  return (
    <Flex
      flexDirection={horizontal ? 'row' : 'column'}
      alignItems={horizontal ? 'center' : 'auto'}
      {...rest}
    >
      {label && (
        <Text mr={10} mb={2} fontSize={1}>
          {label}
        </Text>
      )}
      {!children && (
        <Input
          error={!!error}
          fontSize={1}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
        />
      )}
      {children}
    </Flex>
  )
}
