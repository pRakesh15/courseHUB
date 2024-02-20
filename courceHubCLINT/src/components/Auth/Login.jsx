import { Box, Button, Container, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container h={"80vh"} display={'flex'} justifyContent={'center'} mt={10}>
      <VStack h={"full"} >
        <Heading children={"Log in to your account"} />
        <form style={{ width: "100%" }} className="mt-2">
          <Box>
            <input
              type="text"
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
          <Box className="mt-2 p-3 border rounded-none border-black w-full font-bold">Continue with Google</Box>
          <Box className="mt-2 p-3 border rounded-none border-black w-full font-bold"> Continue with Facebook</Box>
          <Button className="mt-2 w-full" backgroundColor={"green"}>
            Log in
          </Button>
        </form>
        <Box color={"black"}>
        or
        <Link to="/forgotPassword" className="font-bold text-[#613e96]" >Forgot Password</Link>
        </Box>
        <Box color={"black"}>
        Don't have an account?
        <Link to="/Signup" className="font-bold text-[#613e96]" >Sign up</Link>
        </Box>
      </VStack>
    </Container>
  );
};

export default Login;
