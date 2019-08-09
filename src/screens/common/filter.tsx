import * as React from 'react'
import { FaCloudRain, FaTemperatureLow } from 'react-icons/fa'
import { Button, Flex, Select, Tooltip } from '../../components/generic'
import { circularButton } from '../../components/presets'
import { COUNTRIES, RECORD, YEAR_PERIODS } from '../../context/catalogs'
import { colors } from '../../theme'
import { RequestParams } from '../../types'

type FilterProps = {
  values: RequestParams
  onChange: (value: { [k: string]: any }) => void
}

export const Filter: React.FC<FilterProps> = ({ values, onChange }) => {
  const yearsPeriod = `${values.fromYear}-${values.toYear}`

  return (
    <Flex
      flexDirection={['column', 'column', 'row']}
      justifyContent={'space-between'}
    >
      <Flex flexDirection={['column', 'column', 'row']}>
        <Select
          onChange={v => {
            const [fromYear, toYear] = v.split('-')
            onChange({ fromYear, toYear })
          }}
          value={yearsPeriod}
          options={YEAR_PERIODS.map(v => ({ value: v, label: v }))}
        />
        <Select
          ml={[0, 0, 20]}
          mt={[20, 20, 0]}
          onChange={country => onChange({ country })}
          value={values.country}
          options={COUNTRIES.map(([value, label]) => ({ value, label }))}
        />
      </Flex>
      <Flex mt={[20, 20, 0]} justifyContent={['center', null, 'flex-start']}>
        {RECORD.types.map(([value, label]) => (
          <Flex key={value} mx={2}>
            <Tooltip title={label}>
              <Button
                {...circularButton}
                onClick={() => onChange({ variable: value })}
                background={
                  values.variable === value ? colors.primary[0] : 'white'
                }
              >
                {value === 'pr' && (
                  <FaCloudRain
                    color={values.variable === value ? 'white' : colors.gray[2]}
                  />
                )}
                {value === 'tas' && (
                  <FaTemperatureLow
                    color={values.variable === value ? 'white' : colors.gray[2]}
                  />
                )}
              </Button>
            </Tooltip>
          </Flex>
        ))}
      </Flex>
    </Flex>
  )
}
