import { Box, Button, Container, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Contactpg = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
  return (
    <section>
      <Image src="/bg3.jpg" />
      <Container
        h={"52vh"}
        display={"flex"}
        justifyContent={"center"}
        marginTop={-40}
      >
        <VStack backgroundColor={"white"}>
          <Heading children={"How May we Help You?"} padding={5} />
          <form style={{ width: "100%" }} className="mt-2 p-5">
            <Box>
              <input
                type="text"
                placeholder="Email"
                className="p-3 border rounded-none border-black w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>
            <Box className="mt-2">
              <input
                type="text"
                placeholder="name"
                className="p-3 border rounded-none border-black w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Box>
            <Box className="mt-2">
            <input
              type="text"
              placeholder="message"
              className="p-3 border rounded-none border-black w-full"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Box>
            <Button
              className="mt-2 w-full"
              backgroundColor={"green"}
              p={6}
              borderRadius={0}
            >
              Send
            </Button>
          </form>
        </VStack>
      </Container>
    </section>
  );
};

export default Contactpg;
