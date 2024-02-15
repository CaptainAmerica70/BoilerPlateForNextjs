'use client'
import BoxComponent from '@/components/Box/page'
import { Icon } from '@chakra-ui/react'
import React from 'react'
import Image from '../../../svg/Image.svg'
import style from './Banner.module.css'
import { Carousels } from '@/components/Carousel'
const Banner1 = () => {
  return (
    <>
      <BoxComponent bg={'Main.primary'} className={`${style.Banner} flex justify-center `} p={'19.93%'}  >
        <Carousels name={'main'} />
      </BoxComponent></>
  )
}

export default Banner1