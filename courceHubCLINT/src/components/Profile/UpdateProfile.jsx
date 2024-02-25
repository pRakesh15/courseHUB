import { Button, Container, Heading, VStack } from '@chakra-ui/react'

import React, { useState } from 'react'

const UpdateProfile = () => {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  return (
    <Container py={16} minH={"75vh"}>
    <form>
    <Heading 
    children="Update Profile"
    textTransform={"uppercase"}
    my={8}
    textAlign={["center","left"]}
    />
    <VStack spacing={8}
    
    >
    <input
    type="text"
    placeholder="name eg:Sivani"
    value={name}
    onChange={(e)=>setName(e.target.value)}
    className="p-3 border rounded-none border-black w-full"
  />
 
  <input
  type="text"
  placeholder="email eg:Sivani119@gmail.com"
  value={email}
  onChange={(e)=>setEmail(e.target.value)}
  className="p-3 border rounded-none border-black w-full"
/>
 <Button colorScheme='green'>Update </Button>
    
    </VStack>
    </form>
    </Container>
  )
}

export default UpdateProfile
