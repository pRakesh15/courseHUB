import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { RiArrowDownLine, RiArrowUpLine } from "react-icons/ri";

const Databox = ({ title, qty, qtyPercentage, profite }) => {
  return (
    <Box
      w={["full", "20%"]}
      boxShadow={"-2px 0 10px rgba(107,70,193,.5)"}
      p={6}
      borderRadius={"lg"}
   bg={"purple.400"}
    >
      <Text children={title} />
      <HStack spacing={6}>
      <Text 
      fontSize={'2xl'}
      fontWeight={'bold'}
      children={qty}
      />
      <HStack>
      <Text children={`${qtyPercentage}%`} />
      {profite ? (
        <RiArrowUpLine color="green" />
      ) : (
        <RiArrowDownLine color="red" />
      )}
    </HStack>

      </HStack>
      <Text children={'Since Last Month'} opacity={.6}/>
    </Box>
  );
};

export default Databox;
