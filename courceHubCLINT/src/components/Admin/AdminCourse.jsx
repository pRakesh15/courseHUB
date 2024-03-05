import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import SideBar from "../Sub/SideBar";
import { RiDeleteBin7Fill } from "react-icons/ri";
import ViewCourseModal from "./ViewCourseModal";

const AdminCourse = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  //Dumy users..

  const course = [
    {
      _id: "51df5d1d4cds",
      title: "ReactNative",
      category: "webDevlopement",
      poster: {
        url: "https://i0.wp.com/theliberacy.com/wp-content/uploads/2023/01/Mia-Malkova.jpg?w=1125&ssl=1",
      },
      createdBy: "Rakesh Pradhan",
      views: 123,
      numOfvideos: 5,
      subscription: {
        status: "active",
      },
    },
  ];
  // console.log(course[0].poster.url)

  //function for course details
  const courseDetailsHandler = (userId) => {
    onOpen();
  };

  //function for  delete the user
  const deleteUserHandler = (userId) => {
    console.log(`delete function for ${userId}`);
  };

  //function for adding lectures in a existing course..
  const addLectureHandler = (e, courseId, title, description, video) => {
    e.preventDefault();
  };

  return (
    <Grid minH={"100vh"} templateColumns={["1fr", "5fr 1fr"]}>
      <Box p={[0, 8]} overflowX={"auto"}>
        <Heading
          textTransform={"uppercase"}
          children="All Users"
          my={16}
          textAlign={["center", "left"]}
        />

        <TableContainer w={["100vw", "full"]}>
          <Table variant={"simple"} size={"lg"}>
            <TableCaption>All courses</TableCaption>

            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Poster</Th>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th>Creator</Th>
                <Th isNumeric>Views</Th>
                <Th isNumeric>Lectures</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {course.map((item, index) => (
                <Row
                  key={index}
                  item={item}
                  courseDetailsHandler={courseDetailsHandler}
                  deleteUserHandler={deleteUserHandler}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <ViewCourseModal isOpen={isOpen} onClose={onClose} course={course} addLectureHandler={addLectureHandler} />
      </Box>
      <SideBar />
    </Grid>
  );
};

const Row = ({ item, courseDetailsHandler, deleteUserHandler }) => {
  // console.log(item.poster.url)
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>
        <Image src={item.poster.url} alt="img" />
      </Td>
      <Td>{item.title}</Td>
      <Td textTransform={"uppercase"}>{item.category}</Td>
      <Td>{item.createdBy}</Td>
      <Td isNumeric>{item.views}</Td>
      <Td isNumeric>{item.numOfvideos}</Td>
      <Td isNumeric>
        <HStack justifyContent={"flex-end"}>
          <Button
            variant={"outline"}
            color={"green.500"}
            onClick={() => {
              courseDetailsHandler(item._id);
            }}
          >
            View Lectures
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

export default AdminCourse;
