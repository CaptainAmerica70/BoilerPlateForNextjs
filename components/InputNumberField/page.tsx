import { Box, FormControl, FormErrorMessage, Input, InputGroup, InputLeftAddon } from '@chakra-ui/react'
import { useField } from 'formik';
import React from 'react'
import { FlagIcon } from 'react-flag-kit'

const InputNumberField = () => {

  return (
    <>
      <FormControl >
        <InputGroup>
          <InputLeftAddon>
            <Box mr="2">
              <FlagIcon code="IN" size={16} /> {/* Indian flag */}
            </Box>
            +91
          </InputLeftAddon>
          <Input type="tel" />
        </InputGroup>
      </FormControl></>
  )
}

export default InputNumberField