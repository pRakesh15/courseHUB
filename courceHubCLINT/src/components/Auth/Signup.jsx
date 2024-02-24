import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  VStack,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { MdEdit } from "react-icons/md";


const Signup = () => {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [imgprev,setImgprev]=useState('');
  const [image,setImage]=useState('');
  const inputRef = useRef(null);
  const handelImageClick = () => {
    inputRef.current.click();
  };
  //function for chose a image and privew that
  const changeImageHandler=(e)=>
  {
    const file=e.target.files[0];
    const reader=new FileReader();
    reader.readAsDataURL(file);
     reader.onloadend=()=>
     {
      setImgprev(reader.result);
      setImage(file);
     }
  }
  // const print =()=>
  // {
  //   console.log(name,email,password)
  // }
  return (
    <Container h={"80vh"} display={"flex"} justifyContent={"center"} mt={10}>
      <VStack h={"full"}>
        <Heading children={"Sign up and start learning"} />
        <form style={{ width: "100%" }} className="mt-2">
          <Box m={4} display={"flex"} justifyContent={"center"}>
            <Avatar src={imgprev} size={"xl"} />
            <div  onClick={handelImageClick}>
            <MdEdit className="mt-16 cursor-pointer -ml-2 text-2xl"/>
            <input
            type="file"
            ref={inputRef}
            p={1.5}
            accept="image/*"
            onChange={changeImageHandler}
            className="hidden invisible"
          />
            </div>
          </Box>
          <Box>
            <input
              type="text"
              placeholder="Full name"
              className="p-3 border rounded-none border-black w-full"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
          </Box>
          <Box className="mt-2">
            <input
              type="email"
              placeholder="Email"
              className="p-3 border rounded-none border-black w-full"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </Box>
          <Box className="mt-2">
            <input
              type="password"
              placeholder="Password"
              className="p-3 border rounded-none border-black w-full"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              />
          </Box>

          <Button className="mt-2 w-full" backgroundColor={"green"} p={6} borderRadius={0}>
            Sign up
          </Button>
        </form>
        <Box color={"black"} mt={6}>
          Already have an account?
          <Link to="/login" className="font-bold text-[#613e96]">
            Sign in
          </Link>
        </Box>
      </VStack>
    </Container>
  );
};

export default Signup;
