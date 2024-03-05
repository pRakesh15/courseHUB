import {
  Box,
  Button,
  Grid,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import VideoCard from "./VideoCard";

const ViewCourseModal = ({
  isOpen,
  onClose,
  course,
  lectures = [],
  addLectureHandler,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [video, setVideo] = useState("");
  const [videoprev, setVideoprev] = useState("");
  // console.log(course[0].title)
  const coursee = course[0];
  //function for delete course
  const deletelectureHandler = (courseId, lectureId) => {
    console.log(`#${courseId} and ${lectureId}`);
  };
  //function for upload and prev the video

  const changeVideoHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setVideoprev(reader.result);
      setVideo(file);
    };
  };
  const handelClose=()=>
  {
    setTitle("")
    setDescription("")
    setVideo("")
    setVideoprev("")
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={handelClose} size={"full"} scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{coursee.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody p={16}>
          <Grid templateColumns={["1fr", "3fr 1fr"]}>
            <Box px={[0, 16]}>
              <Box my={5}>
                <Heading children={coursee.title} />
                <Heading children={coursee._id} size={"sm"} opacity={0.4} />
              </Box>
              <Heading children={"lectures"} size={"lg"} />
              <VideoCard
                title={coursee.title}
                description={"react 19 is on fire"}
                num={5}
                lectureId={"55gd8r2s8r"}
                courseId={coursee._id}
                deleteButtionHAndler={deletelectureHandler}
              />
            </Box>

            <Box>
              <form
                onSubmit={(e) =>
                  addLectureHandler(e, coursee._id, title, description, video)
                }
              >
                <VStack spacing={4}>
                  <Heading
                    size={"md"}
                    textTransform={"uppercase"}
                    children="Add Lecture"
                  />
                  <Input
                    focusBorderColor="green.600"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <Input
                    focusBorderColor="green.600"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <Input
                    accept="video/mp4"
                    required
                    type={"file"}
                    focusBorderColor="green.600"
                    onChange={changeVideoHandler}
                    className="cursor-pointer  w-[110%] border-none h-[100%] bg-white "
                  />
                  {videoprev && (
                    <video
                      controlsList="nodownload"
                      controls
                      src={videoprev}
                    ></video>
                  )}
                  <Button w={"full"} colorScheme="green" type="submit">
                    Upload
                  </Button>
                </VStack>
              </form>

            </Box>
          </Grid>
        </ModalBody>
        <ModalFooter>
        <Button onClick={handelClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ViewCourseModal;
