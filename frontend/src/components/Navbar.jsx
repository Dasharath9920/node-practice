import { Button, Container, Flex, HStack, Text, useColorMode } from '@chakra-ui/react';
import React from 'react'
import { CiSquarePlus } from "react-icons/ci";
import { Link } from 'react-router-dom';
 
const Navbar = () => {

   const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxWidth={'1140px'} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'} flexDir={{base: 'column', sm: 'row'}}>
         <Text
            bgGradient='linear(to-l, #7928CA, #FF0080)'
            bgClip='text'
            fontSize={{base: '22', sm: '28'}}
            fontWeight='extrabold'>
               <Link to={'/'}>Product Store 🛒</Link> 
         </Text>
         <HStack spacing={2} alignItems={'center'}>
            <Link to={'/create'}>
               <Button>
                  <CiSquarePlus fontSize={20}/>
               </Button>
            </Link>
            <Button onClick={toggleColorMode}>
               {colorMode === 'light' ? '🌙' : '🌞' }
            </Button>
         </HStack>
      </Flex>
    </Container>
  )
}

export default Navbar;