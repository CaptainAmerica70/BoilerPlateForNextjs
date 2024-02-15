import { Box, Input, InputGroup, InputLeftAddon, Skeleton } from '@chakra-ui/react'
import React from 'react'
import * as Yup from 'yup';
import { Formik, Form, Field, useField, useFormikContext } from 'formik';
import { FormControl, FormErrorMessage, FormLabel, SelectField } from '@chakra-ui/react';
import { FlagIcon } from 'react-flag-kit';

interface StyleProperties {
  width: string;
  height: string;
  padding: string;
  borderRadius: string;
  border: string;
}

interface InputProps {
  width?: string;
  height: string;
  // Style: StyleProperties[];
  placeholder: string;
  // variant: string;
  schema: string;
  label: string;
  type: string;
  name: string;
  borderColor: string;
  maxLength?: number;
}

const InputField: React.FC<InputProps> = ({ type, borderColor, height, width, placeholder, label, ...props }) => {
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
  }
  if (!width) {
    return (
      <FormControl isInvalid={!!(meta.error && meta.touched)}>
        <InputGroup
          variant='outline'
          width="464px"
          borderColor={borderColor}>
          <InputLeftAddon>
            <Box mr="2" >
              <FlagIcon code="IN" size={16} /> {/* Indian flag */}
            </Box>
            +91
          </InputLeftAddon>
          <Input {...field} {...props} id={field.name} type="tel" placeholder={placeholder ? placeholder : ''} height={height ? height : ''}
          />
        </InputGroup>
        {meta.touched && meta.error ? (
          <FormErrorMessage>{meta.error}</FormErrorMessage>
        ) : null}
      </FormControl>
    )
  }
  else {
    return <Skeleton height='20px' width={'full'} />
  }
}

export default InputField
