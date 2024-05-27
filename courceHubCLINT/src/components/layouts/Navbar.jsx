import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  VStack,
  HStack,
  Input
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiDashboardFill, RiLogoutBoxRLine, RiMenu5Fill } from "react-icons/ri";
const Naviigation = ({ url = "/", title = "Home",onClick }) => (
  <Link to={url} onClick={onClick}>
    <Button  variant="ghost">{title}</Button>
  </Link>
);

const Navbar = () => {
  const isAuthantiate = false;
  const user={
    role:"user",
  }
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [keyWord,setKeyWord]=useState('');
  return (
    <div className="bg-[#F0E8FF] w-full h-14 flex items-center justify-between p-4 drop-shadow-md">
      <div className="text-xl font-semibold text-gray-700"><Link to="/">COURSEHUB</Link></div>
      <Input value={keyWord} onChange={e=>setKeyWord(e.target.value)} placeholder='Search for anything' type='text' focusBorderColor='black' border={'1px solid green'} w={'90vh'} justifyContent={'center'}/>
      <div>
        <Link to="/login">
          <button className="font-semibold text-[18px]">
            {isAuthantiate ? <></> : <>Login</>}
          </button>
        </Link>
        <Button colorScheme="white" onClick={onOpen}>
          <RiMenu5Fill className="text-xl text-black" />
        </Button>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay backdropFilter={"blur(1px)"} />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>COURSEHUB</DrawerHeader>

            <DrawerBody>
              <VStack spacing={"4"} alignItems={"flex-end"}>
                <Naviigation onClick={onClose} url="/" title="Home" />
                <Naviigation onClick={onClose} url="/courses" title="Browse All Courses" />
                <Naviigation onClick={onClose} url="/contact" title="Contsct Us" />
                <Naviigation onClick={onClose} url="/about" title="About" />

                <HStack
                  justifyContent={"space-evenly"}
                  position={"absolute"}
                  bottom={"2rem"}
                  width={"80%"}
                >
                  {isAuthantiate ? (
                    <>
                      <VStack>
                        <HStack>
                          <Button onClick={onClose} colorScheme="red" variant={"ghost"}>
                          <RiLogoutBoxRLine className="m-1"/>
                          LogOut</Button>

                          <p className="font-bold">OR</p>

                          <Link to="/profile">
                            <Button onClick={onClose} colorScheme="green" variant={"ghost"}>Profile</Button>
                          </Link>
                        </HStack>
                        {
                          user && user.role==="admin" && <Link to="/admin/dasbord">
                          <Button onClick={onClose} colorScheme="purple" variant={"ghost"}>
                          <RiDashboardFill className="m-1"/>
                          Dashboard</Button>
                          </Link>
                        }
                      </VStack>
                    </>
                  ) : (
                    <>
                      <Link to="/login">
                        <Button onClick={onClose} colorScheme="green">Login</Button>
                      </Link>
                      <p>OR</p>

                      <Link to="/SignUp">
                        <Button onClick={onClose} colorScheme="green">SignUp</Button>
                      </Link>
                    </>
                  )}
                </HStack>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default Navbar;
