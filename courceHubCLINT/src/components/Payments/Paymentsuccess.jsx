import { Box, Button, Container, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Paymentsuccess = () => {
  return (
    <Container h={"90vh"} p={"14"}>
      <Heading
        my={"2"}
        textAlign={"center"}
        children={"you have access to tish course"}
      />
      <VStack
        boxShadow={"lg"}
        pb={16}
        alignItems={"center"}
        borderRadius={"lg"}
      >
        <Box
          w="full"
          bg={"green.400"}
          p={"4"}
          css={{ borderRadius: "8px 8px 0 0" }}
        >
          <Text color={"black"} children={"payment Success"} />
        </Box>

        <Box padding={4}>
          <VStack textAlign={"center"} px={8} mt={4} spacing={8}>
            <Text
              children={"Congraulation you have successyfully bye the course"}
            />
            <Heading size={"4xl"}>
            <RiCheckboxCircleFill/>
            </Heading>
          </VStack>
        </Box>

        <Link to="/profile">
        <Button variant={"ghost"}>Go to profile</Button>
        </Link>

        <Heading size={"xs"}>
        Reference No: hgmsdfhgfFh
        </Heading>

      </VStack>
    </Container>
  );
};

export default Paymentsuccess;
