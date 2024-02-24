import { Box, Grid, Heading, Text, VStack, useStatStyles } from "@chakra-ui/react";
import React, { useState } from "react";

const Course = () => {
    const [lecturenumber,setLecturenumber]=useState(0)
  const lectureNumber = 0;
  const lectureTitel = "redux and react";
const lecture=[{
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
},
{
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
},
{
    title: "1984",
    author: "George Orwell",
    year: 1949
}]


  return (
    <Grid minH={"90vh"} templateColumns={["1fr", "3fr 1fr"]}>
      <Box>
        <video
          autoPlay
          muted
          controls
          controlsList="nodownload  noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          width={"100%"}
          src="https://vimeo.com/905410259"
        ></video>
        <Heading m={4} children={`#${lectureNumber + 1} ${lectureTitel}`} />
        <Heading m={4} children="Description" />
      </Box>

      <VStack>
      {
        lecture.map((item,index)=>(
            <button
            onClick={()=>setLecturenumber(index)}
            key={index} className="w-[100%] p-[1rem] text-center m-0 border-b-2" >
            <Text noOfLines={1} >
            #{index+1} {item.title}
            </Text>
            </button>
        ))
      }
      </VStack>
    </Grid>
  );
};

export default Course;
