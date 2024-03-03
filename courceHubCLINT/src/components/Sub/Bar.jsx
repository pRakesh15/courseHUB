import { Box, HStack, Heading, Progress, Text } from "@chakra-ui/react";
import React from "react";

const Bar = ({ titel, value,profit }) => {
  return (
    <Box py={4} px={[0, 20]}>
      <Heading size={"sm"} children={titel} mb={2} />
      <HStack w={"full"} alignItems={"center"}>
        <Text children={profit?`${value}%`:`-${value}%`} />
        <Progress
          borderRadius={"20px"}
          w={"full"}
          value={profit?value:0}
          colorScheme="purple"
        />

        <Text children={`${value > 100 ? value : 100}%`} />
      </HStack>
    </Box>
  );
};

export default Bar;
