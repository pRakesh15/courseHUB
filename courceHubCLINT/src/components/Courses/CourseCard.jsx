import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const CourseCard = () => {
  const addToCartHandler=()=>
  {
    console.log("item added successfully")
  }
  return (
    <Card maxW='xs' className='course'>
  <CardBody>
    <Image 
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Link to="/subscribe">
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      </Link>
      <Button onClick={addToCartHandler} variant='ghost' colorScheme='blue' >
       Add to PlayList
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
  )
}

export default CourseCard
