import { Box, Grid, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import SideBar from "../../Sub/SideBar";
import Databox from "../../Sub/Databox";
import Bar from "../../Sub/Bar";
import { DoughnutChart, LineChart } from "./Chart";
const Dashboard = () => {
  return (
    <Grid minH={"100vh"} templateColumns={["1fr", "5fr 1fr"]}>
      <Box boxSizing="border-box" py={6} px={["4", "0"]}>
        <Text
          textAlign={"center"}
          opacity={0.5}
          children={`last change was on ${String(new Date()).split("G")[0]}`}
        />
        <Heading
          children="Dashboard"
          ml={[0, 16]}
          textAlign={["center", "left"]}
        />
        <Stack
          direction={["column", "row"]}
          minH={24}
          mt={5}
          justifyContent={"space-evenly"}
        >
          <Databox title="View" qty={23} qtyPercentage={30} profite={true} />
          <Databox title="Users" qty={29} qtyPercentage={23} profite={true} />
          <Databox
            title="Subscription"
            qty={69}
            qtyPercentage={20}
            profite={false}
          />
        </Stack>
        <Box
          m={["0", "16"]}
          borderRadius={"lg"}
          p={[0, 16]}
          mt={[4, 16]}
          boxShadow={"-2px 0 10px rgba(107,70,193,0.5)"}
        >
          <Heading
            textAlign={["center", "left"]}
            size={"md"}
            children={"Views Graph"}
            pt={[8, 0]}
            ml={[0, 10]}
          />

          <LineChart />
        </Box>
        <Grid templateColumns={["1fr", "2fr 1fr"]}>
          <Box p={4}>
            <Heading
              textAlign={["center", "left"]}
              size={"md"}
              children="Progress Bar"
              my={8}
              ml={["0", "16"]}
            />
            <Box>
              <Bar profit={true} titel={"View"} value={30} />
              <Bar profit={true} titel={"Users"} value={28} />
              <Bar profit={true} titel={"Subscription"} value={20} />
            </Box>
          </Box>

          <Box p={[0, 16]} boxSizing="border-box" py={4}>
            <Heading
              textAlign={"center"}
              size={"md"}
              mb={4}
              children={"Users"}
            />

            <DoughnutChart />
          </Box>
        </Grid>
      </Box>
      <SideBar />
    </Grid>
  );
};

export default Dashboard;
