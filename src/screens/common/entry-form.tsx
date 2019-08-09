import { Formik, FormikConfig, FormikProps } from 'formik'
import * as React from 'react'
import { Fragment } from 'react'
import * as Yup from 'yup'
import { Field, Form, Text } from '../../components/generic'

export const formSchema = Yup.object().shape({
  gcm: Yup.string()
    .max(7, 'Too Long :P')
    .required('Required'),
})

type OrderFormFields = {
  gcm: string
}
type EntryFormProps = FormikConfig<OrderFormFields> & {
  children: (formState: FormikProps<OrderFormFields>) => any
}

export const EntryForm: React.FC<EntryFormProps> = ({ children, ...props }) => {
  return (
    <Formik {...props} isInitialValid validationSchema={formSchema}>
      {formState => {
        const {
          values,
          handleSubmit,
          handleChange,
          handleBlur,
          errors,
        } = formState

        return (
          <Fragment>
            <Form onSubmit={handleSubmit} px={20} flexDirection={'column'}>
              <Field
                flex={1}
                error={errors.gcm}
                value={values.gcm}
                onChange={handleChange}
                onBlur={handleBlur}
                name={'gcm'}
                label={'GCM Name'}
                mt={30}
                placeholder={'Enter name of GCM'}
              />
            <Text mt={20} fontSize={0}>All other values will be randomly filled in :)</Text>
            </Form>
            {children(formState)}
          </Fragment>
        )
      }}
    </Formik>
  )
}
