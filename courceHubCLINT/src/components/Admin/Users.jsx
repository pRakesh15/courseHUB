import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import SideBar from "../Sub/SideBar";
import { RiDeleteBin7Fill } from "react-icons/ri";

const Users = () => {
  //Dumy users..

  const users = [
    {
      _id: "51df5d1d4cds",
      name: "Rakesh",
      role: "admin",
      email: "rp@gmail.com",
      subscription: {
        status: "active",
      },
    },
  ];

  //function for update the user role
  const updateUserHandler = (userId) => {
    console.log(`update function for ${userId}`);
  };

  //function for  delete the user
  const deleteUserHandler = (userId) => {
    console.log(`delete function for ${userId}`);
  };

  return (
    <Grid minH={"100vh"} templateColumns={["1fr", "5fr 1fr"]}>
      <Box p={[0, 16]} overflowX={"auto"}>
        <Heading
          textTransform={"uppercase"}
          children="All Users"
          my={16}
          textAlign={["center", "left"]}
        />

        <TableContainer w={["100vw", "full"]}>
          <Table variant={"simple"} size={"lg"}>
            <TableCaption>All available users</TableCaption>

            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Role</Th>
                <Th>Subscription</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map((item, index) => (
                <Row
                  key={index}
                  item={item}
                  updateUserHandler={updateUserHandler}
                  deleteUserHandler={deleteUserHandler}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <SideBar />
    </Grid>
  );
};

export default Users;

const Row = ({ item, updateUserHandler, deleteUserHandler }) => {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>{item.name}</Td>
      <Td>{item.email}</Td>
      <Td>{item.role}</Td>
      <Td>{item.subscription.status === "active" ? "Active" : "Not Active"}</Td>
      <Td isNumeric>
        <HStack justifyContent={"flex-end"}>
          <Button
            variant={"outline"}
            color={"green.500"}
            onClick={() => {
              updateUserHandler(item._id);
            }}
          >
            Change Role
          </Button>
          <Button
            color={"red.500"}
            onClick={() => {
              deleteUserHandler(item._id);
            }}
          >
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
};
