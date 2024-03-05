import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { RiDeleteBack2Fill, RiDeleteBin7Fill } from "react-icons/ri";

const VideoCard = ({
  title,
  description,
  num,
  lectureId,
  deleteButtionHAndler,
  courseId
}) => {
  return (
    <Stack 
    direction={["column", "row"]}
    my={8}
    borderRadius={"lg"}
    boxShadow={"0 0 10px rgba(107,70,193,0.5)"}
    justifyContent={["flex-start","space-between"]}
    p={[4,8]}
    >
      <Box>
        <Heading size={"small"} children={`#${num} ${title}`} />
        <Text children={description}/>
      </Box>
      <Button color={"red.600"}
      onClick={()=>deleteButtionHAndler(courseId,lectureId)}
      ><RiDeleteBin7Fill/></Button>
    </Stack>
  );
};

export default VideoCard;
