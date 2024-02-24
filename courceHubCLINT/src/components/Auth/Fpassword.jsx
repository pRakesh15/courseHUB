import { Box, Button, Container, Heading, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Fpassword = () => {
  const [email, setEmail] = useState("");
  return (
    <Container h={"80vh"} display={"flex"} justifyContent={"center"} mt={10}>
      <VStack h={"full"}>
       <Text className="text-xl font-bold w-[368px]">Forgot Password</Text>
        <form style={{ width: "100%" }} className="mt-2">
          <Box>
            <input
              type="text"
              placeholder="Email"
              className="p-3 border rounded-none border-black w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Button className="mt-2 w-full " backgroundColor={"#0B888E"} p={6} borderRadius={0}>
            Reset Password
          </Button>
        </form>
        <Box color={"black"} mt={6}>
       or <span></span>
        <Link to="/login" className="font-bold text-[#613e96]">
          Sign in
        </Link>
      </Box>
      </VStack>
    </Container>
  )
}

export default Fpassword
