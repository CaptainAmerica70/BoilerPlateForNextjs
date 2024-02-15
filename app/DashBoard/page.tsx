'use client'
import React from 'react'
import Header from './Header'
import { Box } from '@chakra-ui/react'
import styles from '../DashBoard/Dashboard.module.css'
const page = () => {
  return (
    <>
      <Box className={styles.main} width={'screen'} height={'100vh'}>
        <Header />
        <h1 >that what all done</h1>
      </Box >
    </>
  )
}

export default page