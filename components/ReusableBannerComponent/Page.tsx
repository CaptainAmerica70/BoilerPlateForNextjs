import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import styles from './banner.module.scss';

const Banner = () => {
  return (

    <Box className='stack-component'>
      <Image width={'100%'} height={'100%'} srcSet='/images/jurica-koletic-efqnM0zWh54-unsplash.jpg'></Image>
    </Box>
  )
}

export default Banner