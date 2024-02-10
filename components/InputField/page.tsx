import { Input, Skeleton } from '@chakra-ui/react'
import React from 'react'
import * as Yup from 'yup';
import { Formik, Form, Field, useField, useFormikContext } from 'formik';
import { FormControl, FormErrorMessage, FormLabel, SelectField } from '@chakra-ui/react';

interface StyleProperties {
  width: string;
  height: string;
  padding: string;
  borderRadius: string;
  border: string;
}

interface InputProps {
  width: string;
  height: string;
  // Style: StyleProperties[];
  placeholder: string;
  // variant: string;
  schema: string;
  label: string;
  type: string;
  name: string;
  borderColor: string;
}

const InputField: React.FC<InputProps> = ({ borderColor, height, width, placeholder, label, ...props }) => {
  const [field, meta] = useField(props);
  if (width) {
    return (
      <FormControl isInvalid={!!(meta.error && meta.touched)}>
        <Input width={width ? width : ''} height={height ? height : ''} placeholder={placeholder ? placeholder : ''}
          variant='outline'
          borderColor={borderColor}
          {...field} {...props} id={field.name}
        />
        {meta.touched && meta.error ? (
          <FormErrorMessage textStyle={'bodySM'} textColor={'red'}>{meta.error}</FormErrorMessage>
        ) : null}
      </FormControl>
    )
  } else {
    return <Skeleton height='20px' width={'full'} />
  }
}

export default InputField
