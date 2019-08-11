import { Fragment, useState } from 'react'
import * as React from 'react'
import { FaCloudRain, FaPlus, FaTemperatureLow } from 'react-icons/fa'
import {
  Button,
  Flex,
  Modal,
  Select,
  Text,
  Tooltip,
} from '../../components/generic'
import { circularButton, modalControls, normalModal } from '../../components/presets'
import { useStore } from '../../context'
import { COUNTRIES, RECORD, YEAR_PERIODS } from '../../context/catalogs'
import { colors } from '../../theme'
import { RequestParams } from '../../types'
import { EntryForm } from './entry-form'

type FilterProps = {
  values: RequestParams
  onChange: (value: { [k: string]: any }) => void
}

export const Filter: React.FC<FilterProps> = ({ values, onChange }) => {
  const {
    operations: { appendRecord },
  } = useStore()
  const [isModal, setModal] = useState(false)
  const yearsPeriod = `${values.fromYear}-${values.toYear}`

  return (
    <Fragment>
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
                      color={
                        values.variable === value ? 'white' : colors.gray[2]
                      }
                    />
                  )}
                  {value === 'tas' && (
                    <FaTemperatureLow
                      color={
                        values.variable === value ? 'white' : colors.gray[2]
                      }
                    />
                  )}
                </Button>
              </Tooltip>
            </Flex>
          ))}
          <Tooltip title={'Create new entry'}>
            <Button
              {...circularButton}
              onClick={() => setModal(true)}
              background={'primary.4'}
            >
              <FaPlus color={'white'} />
            </Button>
          </Tooltip>
        </Flex>
      </Flex>
      {isModal && (
        <Modal
          {...normalModal}
          onClose={() => setModal(false)}
          title={'Create New GCM entry'}
        >
          <EntryForm
            onSubmit={({ gcm }) => {
              appendRecord(values, gcm)
              setModal(false)
            }}
            initialValues={{ gcm: '' }}
          >
            {({ submitForm, isValid }) => (
              <Flex {...modalControls} background={'transparent'}>
                <Button
                  primary
                  clear
                  onClick={() => setModal(false)}
                  disabled={!isValid}
                >
                  <Text fontSize={0} color={'gray.0'} >
                    Cancel
                  </Text>
                </Button>
                <Button
                  primary
                  onClick={() => submitForm()}
                  disabled={!isValid}
                >
                  <Text fontSize={0} color={'white'} >
                    Create Entry
                  </Text>
                </Button>
              </Flex>
            )}
          </EntryForm>
        </Modal>
      )}
    </Fragment>
  )
}
