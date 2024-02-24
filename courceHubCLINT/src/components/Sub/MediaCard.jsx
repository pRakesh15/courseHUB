import {
  AspectRatio,
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import ReactPlayer from "react-player";
const VideoPlayer=()=>
(
    <Box >
    <video 
    autoPlay
    muted
    controls
    controlsList="nodownload nofullscreen noremoteplayback"
    disablePictureInPicture
    disableRemotePlayback
    width={1702}
    src="https://vimeo.com/905410259">
    
    </video>
    </Box>
)

const MediaCard = () => {
  return (
    <Card 
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <VideoPlayer/>

      <Stack>
        <CardBody>
          <Heading size="lg">A metting of the minds</Heading>

          <Text py="2" fontSize={20}>
            We help organizations of all types and sizes prepare for the path
            ahead — wherever it leads. Our curated collection of business and
            technical courses help companies, governments, and nonprofits go
            further by placing learning at the center of their strategies.
          </Text>
        </CardBody>
      </Stack>
    </Card>
  );
};

export default MediaCard;
