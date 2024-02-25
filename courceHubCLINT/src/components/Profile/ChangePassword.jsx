import { Button, Container, Heading, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const ChangePassword = () => {
  const [oldPassword,setOldPassword]=useState('')
  const [newPassword,setNewPassword]=useState('')
  return (
   <Container py={16} minH={"75vh"}>
   <form>
   <Heading 
   children="Change password"
   textTransform={"uppercase"}
   my={8}
   textAlign={["center","left"]}
   />
   <VStack spacing={8}
   
   >
   <input
   required
   type="password"
   placeholder="Old password"
   value={oldPassword}
   onChange={(e)=>setOldPassword(e.target.value)}
   className="p-3 border rounded-none border-black w-full"
 />

 <input
 required
 type="password"
 placeholder="New password"
 value={newPassword}
 onChange={(e)=>setNewPassword(e.target.value)}
 className="p-3 border rounded-none border-black w-full"
/>
<Button colorScheme='green'>Change Password</Button>
   
   </VStack>
   </form>
   </Container>
  )
}

export default ChangePassword
