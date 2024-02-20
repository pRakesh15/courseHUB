import React from 'react'
import { ButtonGroup, Container, Heading, IconButton, Stack, Text } from '@chakra-ui/react'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
const Footer = () => {
  return (
    <Container padding={'4'} bg="black" textColor={"white"} minH={'20vh'} maxW={'235vh'}>
    <Stack spacing={{ base: '4', md: '5' }}>
      <Stack justify="space-between" direction="row" align="center">
        <Heading>COURCEHUB</Heading>
        <ButtonGroup variant="tertiary">
          <IconButton as="a" href="https://www.linkedin.com/in/rakesh-pradhan-664808253/" aria-label="LinkedIn" icon={<FaLinkedin />} target={'_blank'} />
          <IconButton as="a" href="https://github.com/pRakesh15" aria-label="GitHub" icon={<FaGithub />} target={'_blank'} />
          <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} target={'_blank'} />
          <IconButton as="a" href="https://www.instagram.com/mr_yiconic_15/" aria-label="Twitter" icon={<FaInstagram />} target={'_blank'} />
        </ButtonGroup>
      </Stack>
      <Text fontSize="sm" color="fg.subtle">
        &copy; {new Date().getFullYear()} CourceHUB, Inc. All rights reserved.
      </Text>
    </Stack>
  </Container>
  )
}

export default Footer
