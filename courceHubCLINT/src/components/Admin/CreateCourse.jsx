import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  Image,
  Input,
  Select,
  VStack,
  useStatStyles,
} from "@chakra-ui/react";
import React, { useState } from "react";
import SideBar from "../Sub/SideBar";

const CreateCourse = () => {
  const [titel, setTitel] = useState("");
  const [description, setDescription] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [catogary, setCatogary] = useState("");
  const [image, setImage] = useState("");
  const [imagePrev, setImagePrev] = useState("");



  const changeImageHandler=(e)=>
  {
    const file=e.target.files[0];
    const reader=new FileReader();
    reader.readAsDataURL(file);
     reader.onloadend=()=>
     {
      setImagePrev(reader.result);
      setImage(file);
     }
  }

  const category = [
    "Web devlopement",
    "Artificial Intellegency",
    "Data Structure and algorithm",
    "App Devlopement",
    "Data Science",
    "Game Developement",
  ];
  return (
    <Grid minH={"100vh"} templateColumns={["1fr", "5fr 1fr"]}>
      <Container py={16}>
        <form>
          <Heading
            textTransform={"uppercase"}
            children="Create Course"
            my={16}
            textAlign={["center", "left"]}
          />

          <VStack m={"auto"} spacing={4}>
            <input
              value={titel}
              type="text"
              placeholder="course titel"
              className="p-2 border rounded-none border-purple-600 w-full"
              onChange={(e) => setTitel(e.target.value)}
            />
            <input
              value={description}
              type="text"
              placeholder="add description"
              className="p-2 border rounded-none border-purple-600 w-full"
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              value={createdBy}
              type="text"
              placeholder="Name of the creatore"
              className="p-2 border rounded-none border-purple-600 w-full"
              onChange={(e) => setCreatedBy(e.target.value)}
            />
            <Select
              focusBorderColor="purple.300"
              value={catogary}
              onChange={(e) => setCatogary(e.target.value)}
            >
              <option value=""> Category</option>
              {category.map((item, index) => (
                <option key={index} value={item}>
                  {" "}
                  {item}
                </option>
              ))}
            </Select>
            <Input
            accept="image/*"
            required
            type={'file'}
            focusBorderColor="green.600"
            onChange={changeImageHandler}
            className="cursor-pointer  w-[110%] border-none h-[100%] bg-white "
            />
            {
              imagePrev&&(
                <Image src={imagePrev} boxSize={"64"} objectFit={'contain'}/>
              )
            }
            <Button w={'full'} colorScheme="green" type="submit">
            Create
            </Button>
          </VStack>
        </form>
      </Container>
      <SideBar />
    </Grid>
  );
};

export default CreateCourse;
