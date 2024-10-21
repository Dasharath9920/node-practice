import React, { useEffect, useState } from 'react';
import { useProductStore } from '../store/product';
import { Container, VStack, Text, SimpleGrid, Card, CardBody, Divider, Button, Image, Heading, Stack, ButtonGroup, CardFooter } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const {getAllProducts} = useProductStore();
  const [products, setProducts] = useState([]);

  const fetchProducts = async() => {
    const resp = await getAllProducts();
    if(resp.success){
      setProducts(resp.products);
    }
  }

  useEffect(() => {
    fetchProducts();
  },[]);

  return (
    <Container maxW={'container.xl'} py={12}>
      <VStack spacing={8}>
        <Text
            bgGradient='linear(to-l, #7928CA, #FF0080)'
            fontSize={30}
            bgClip={'text'}
            textAlign={'center'}
            fontWeight='bold'>
              Current Products
        </Text>
        {products.length &&  <SimpleGrid columns={3} spacing={10}>
          {products.map(product => {
            return ( 
              <Card maxW='sm'>
                <CardBody>
                  <Image
                    src={product.image}
                    alt={product.name}
                    borderRadius='lg'
                  />
                  <Stack mt='6' spacing='3'>
                    <Heading size='md'>{product.name}</Heading>
                    <Text color='blue.600' fontSize='2xl'>
                      ${product.price}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue'>
                      Update
                    </Button>
                    <Button variant='ghost' colorScheme='blue'>
                      Delete
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            )
          })}
        </SimpleGrid>}
        {!products.length && <Text fontSize={'xl'} textAlign={'center'} fontWeight={'bold'} color={'gray.500'}>
            No products found {' '}
            <Link to={'/create'}>
              <Text as={'span'} color={'blue.500'} _hover={{textDecoration: 'underline'}}>
                Create a product
              </Text>
            </Link>
          </Text>}
      </VStack>
    </Container>
  )
}

export default HomePage;