import { Button, Container, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { RiErrorWarningFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const NoteFound = () => {
  return (
    <Container h={"90vh"}>
      <VStack justifyContent={"center"} h={"full"} spacing={4}>
        <RiErrorWarningFill size={"5rem"} />
        <Heading>404 Page Not Found !! </Heading>
        <Link to="/">
          <Button variant={"ghost"}>Go to Home</Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default NoteFound;
