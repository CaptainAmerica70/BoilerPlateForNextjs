'use Client'
// imports

import Link from "@/components/Link/page"
import { Box, HStack, Text } from "@chakra-ui/react"
import style from './Dashboard.module.css'
import ButtonComponent from "@/components/Button/page"
const Header = () => {
  const links = [
    {
      name: 'work',
      href: '/work'
    },
    {
      name: 'about',
      href: '/about'
    },
    {
      name: 'experience',
      href: '/experience'
    }
  ]

  return (
    <>
      <HStack className="bg-transperant  p-4 text-white " justifyContent={'space-around'}>
        <Box >{links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            textStyle={'secondary.bodyMR'}
            className="flex "
          >
            {link.name}
          </Link>
        ))}</Box>
        <Box>
          <Text className="text-blue bg-green-300 " > FrontEnd <Text as={'span'} className="text-violet-600">DevSmart</Text></Text>
        </Box>
        <Box>
          <ButtonComponent variant="outline" width={'100px !important'} color={"white"}>
            <Text textStyle={'secondary.bodyMR'}>Hit me up</Text>
          </ButtonComponent>
        </Box>
      </HStack>
    </>
  )
}

export default Header
