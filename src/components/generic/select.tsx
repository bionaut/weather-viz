import * as React from 'react'
import { Fragment, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

import { colors } from '../../theme'
import {
  borderBottom,
  boxShadow,
  formElementBorders,
  formElementSpace,
  label,
} from '../presets'
import { Button, ButtonProps } from './button'
import { Flex, FlexProps } from './flex'
import { Screen } from './screen'
import { Text } from './text'

interface ISelectComponents {
  Item?: React.ElementType<{
    value?: any
    label?: any
    color?: string
    data?: any
    toggle(): void
  }>
  Display?: React.ElementType<{ value?: string; color?: string; data?: any }>
  Wrapper?: React.ElementType<FlexProps>
}

type SelectProps = ButtonProps & {
  onChange?: (value: any) => void
  options?:
    | Array<{ label: string; value: string | number }>
    | Array<{ [k: string]: any }>
  value?: string | number
  placeholder?: string
  displayProp?: string
  returnProp?: string
  components?: ISelectComponents
  error?: string | boolean
}

const DefaultItem: React.FC<any> = ({ onClick, value, toggle, label }) => (
  <Button
    key={`${label}${value}`}
    onClick={() => {
      toggle()
      onClick(value)
    }}
    justifyContent={'center'}
    {...borderBottom}
  >
    <Text px={20} lineHeight={'50px'} textAlign={'center'}>
      {label}
    </Text>
  </Button>
)

const DefaultDisplay: React.FC<any> = ({ value, label, color }) => (
  <Text {...label} light={true} mr={10} color={color} fontSize={1}>
    {value}
  </Text>
)

const defaultComponents = {
  Display: DefaultDisplay,
  Item: DefaultItem,
  Wrapper: ({ children, ...rest }: any) => (
    <Flex flex={1} {...rest}>
      {children}
    </Flex>
  ),
}

export const Select: React.FC<SelectProps> = ({
  value,
  placeholder,
  options = [],
  displayProp = 'label',
  returnProp = 'value',
  components = defaultComponents,
  color = 'gray.1',
  onChange,
  error,
  ...rest
}) => {
  // todo useArrows hook
  const [active, setActive] = useState(false)
  const toggle = () => setActive(!active)

  const selectedOption = options.find(option => option[returnProp] === value)
  const displayValue = (selectedOption && selectedOption[displayProp]) || null

  const { Item, Display, Wrapper } = { ...defaultComponents, ...components }

  return (
    <Fragment>
      {active && (
        <Screen
          top={0}
          left={0}
          position={'fixed'}
          onClick={toggle}
          background={'darkAlpha'}
          zIndex={1}
        />
      )}
      <Wrapper {...rest}>
        <Button
          flex={1}
          background={'gray.6'}
          onClick={toggle}
          justifyContent={'space-between'}
          {...formElementSpace}
          {...formElementBorders(error)}
        >
          {displayValue && (
            <Display value={displayValue} color={color} data={selectedOption} />
          )}
          {!displayValue && placeholder && (
            <Text fontSize={1} color={'lightgray'} mr={10}>
              {placeholder}
            </Text>
          )}
          <FaChevronDown color={colors.gray[1]} />
        </Button>
        {active && (
          <Flex
            {...boxShadow}
            position={['fixed']}
            top={'60%'}
            left={0}
            right={0}
            bottom={0}
            background={'white'}
            zIndex={100}
            px={'padding.1'}
            overflow={'auto'}
            flexDirection={'column'}
            style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}
          >
            {options.length === 0 && (
              <Text {...label} fontSize={1}>
                No Items
              </Text>
            )}
            {options.length > 0 &&
              options.map(item => (
                <Item
                  onClick={onChange}
                  data={item}
                  key={item[returnProp || 'value']}
                  label={displayProp ? item[displayProp] : item.label || null}
                  value={returnProp ? item[returnProp] : item.value || null}
                  toggle={toggle}
                />
              ))}
          </Flex>
        )}
      </Wrapper>
    </Fragment>
  )
}
