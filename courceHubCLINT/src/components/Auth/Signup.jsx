import { Box, Button, Container, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <Container h={"80vh"} display={'flex'} justifyContent={'center'} mt={10}>
    <VStack h={"full"} >
      <Heading children={"Log in to your account"} />
      <form style={{ width: "100%" }} className="mt-2">
        <Box>
          <input
            type="text"
            placeholder="Full name"
            className="p-3 border rounded-none border-black w-full"
          />
        </Box>
        <Box className="mt-2">
          <input
            type="email"
            placeholder="Email"
            className="p-3 border rounded-none border-black w-full"
          />
        </Box>
        <Box className="mt-2">
          <input
            type="password"
            placeholder="Password"
            className="p-3 border rounded-none border-black w-full"
          />
        </Box>
        
        <Button className="mt-2 w-full" backgroundColor={"green"}>
         Sign up
        </Button>
      </form>
      <Box color={"black"} mt={6}>
      Already have an account?
      <Link to="/Signup" className="font-bold text-[#613e96]" >Sign up</Link>
      </Box>
    </VStack>
  </Container>
  )
}

export default Signup
