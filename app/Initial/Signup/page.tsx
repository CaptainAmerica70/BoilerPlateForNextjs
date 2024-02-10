'use client';
import InputPage from '@/components/InputField/page'
import { Box, Button, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React from 'react'

import { emailSchema } from '../../../Schema/email';
import { Form, Formik } from 'formik';
import EmailTab from './EmailTab';
const page = () => {
  return (
    <>
      <Stack p={'190px 114px'} width={'750px'}>
        <Text textStyle={'bodyLM'} textColor={'#9C9CAB'} >
          Get Connected with industry best web designer and developer Sign up with us today!
        </Text>
        <Tabs>
          <TabList gap={'19px'}>
            <Tab >
              <Text variant={'bodyLM'}>Phone</Text>
            </Tab>
            <Tab>
              <Text variant={'bodyLM'}>Email</Text>
            </Tab>
          </TabList>
          <TabPanels width={'500px'} height={'500px'}>
            <TabPanel width={'500px'} height={'500px'} >
              <Box p={4} >this is tab</Box>
            </TabPanel>
            <TabPanel width={'500px'} height={'500px'} >
              <Box p={4} ><EmailTab /></Box>
            </TabPanel>
          </TabPanels>

        </Tabs>



      </Stack>
    </>
  )
}

export default page


