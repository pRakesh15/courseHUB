import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser, server } from "../../redux/reducers/userReducer.js";
import axios from "axios";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser({email,password}));
  };

  // const loginFunction = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const { data } = await axios.post(
  //       `${server}/LoginUser`,
  //       { email: email, password: password },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         withCredentials: true,
  //       }
  //     );
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <Container h={"80vh"} display={"flex"} justifyContent={"center"} mt={10}>
      <VStack h={"full"}>
        <Heading children={"Log in to your account"} />
        <form style={{ width: "100%" }} className="mt-2">
          <Box>
            <input
              type="text"
              placeholder="Email"
              name="email"
              className="p-3 border rounded-none border-black w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Box className="mt-2">
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="p-3 border rounded-none border-black w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Box className="mt-2 p-3 border rounded-none border-black w-full font-bold flex">
            <Image className="w-10" src="/google.png" />{" "}
            <Text className="mt-1 ml-2">Continue with Google</Text>
          </Box>
          <Box className="mt-2 p-3 border rounded-none border-black w-full font-bold flex">
            {" "}
            <Image className="w-9" src="/facebook.png" />
            <Text className="mt-1 ml-2"> Continue with Facebook</Text>
          </Box>
          <Button
            onClick={handleLogin}
            className="mt-2 w-full"
            backgroundColor={"green"}
            p={6}
            borderRadius={0}
          >
            Log in
          </Button>
        </form>
        <Box color={"black"}>
          or
          <Link to="/forgotPassword" className="font-bold text-[#613e96]">
            Forgot Password
          </Link>
        </Box>
        <Box color={"black"}>
          Don't have an account?
          <Link to="/Signup" className="font-bold text-[#613e96]">
            Sign up
          </Link>
        </Box>
      </VStack>
    </Container>
  );
};

export default Login;
