import { Box, Container, Heading, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import MediaCard from "../Sub/MediaCard";

const About = () => {
  return (
    <>
      <Container maxW={"container.xl"}>
        <Box className="flex justify-between">
          <Heading
            children="Welcome to where possibilities begin"
            width={600}
            display={"flex"}
            textAlign={"center"}
            marginTop={20}
            fontFamily={"Footlight MT Light"}
            fontSize={50}
          />
          <Image src="/about.webp" width={350} />
        </Box>
        <Box width={"full"} height={"6vh"} bg={"black"}>
          <Link>
            <Text
              color={"white"}
              textAlign={"center"}
              padding={1}
              fontSize={20}
            >
              Check out our latest company news!
            </Text>
          </Link>
        </Box>
        <Box mt={20}>
          <Heading
            children="Skills are the key to unloking pontential"
            textAlign={"center"}
            marginTop={5}
            fontFamily={"Copperplate Gothic Light"}
            fontSize={40}
          />
          <Text
            textAlign={"center"}
            marginX={40}
            my={4}
            fontSize={15}
            fontFamily={"Forte"}
          >
            Whether you want to learn a new skill, train your teams, or share
            what you know with the world, you’re in the right place. As a leader
            in online learning, we’re here to help you achieve your goals and
            transform your life.
          </Text>
        </Box>

        <div className="mt-20">
          <MediaCard />
        </div>
      </Container>
      <Box width={"full"} bg={"#0F3DB2"} height={"65vh"} my={20} display={"flex"} flexDir={"column"} textAlign={"center"}  >
        <Box  width={"full"} padding={10}>
          <Heading
          fontFamily={"Comic Sans MS"}
            color={"white"}
            children="Creating impact around the world"
          />
          <Text  fontSize={20} color={"white"} mt={5}>
            With our global catalog spanning the latest skills and topics,<br/>
            people and organizations everywhere are able to adapt to change and
            thrive.
          </Text>
        </Box>
        <Box color={"white"} width={"full"} >
        <Box display={"flex"} justifyContent={"space-between"} mx={"30vh"}>
        <Text fontSize={18}><span className="font-bold text-4xl">69M</span><br/>Learners</Text>
        <Text  fontSize={18}><span className="font-bold text-4xl">15K+</span><br/>Instructors</Text>
        <Text fontSize={18}><span className="font-bold text-4xl">121K+</span><br/>Courses</Text>
        <Text fontSize={15}><span className="font-bold text-4xl">201M+</span><br/>Course enrollments</Text>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"} mx={"53vh"} my={7}>
        <Text fontSize={18}><span className="font-bold text-4xl">15</span><br/>Languages</Text>
        <Text  fontSize={18}><span className="font-bold text-4xl">15.7K+</span><br/>Enterprise customers</Text>
        
        </Box>
        </Box>
      </Box>
    </>
  );
};

export default About;
