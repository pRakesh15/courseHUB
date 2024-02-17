import { Button, Container, HStack, Heading, Input, Stack, Text, chakra } from '@chakra-ui/react'
import React, { useState } from 'react'
import CourseCard from '../Sub/CourseCard';

const Courses = () => {
    const catagory=["category1","category2","category3","category4","category5","category6"];
    const[category,setCategory]=useState('');
    // console.log(catagory)
  return (
   <Container minH={'95vh'} maxW={'container.xl'} paddingY={'4'}>
   <Heading children="All Courses" m={'12'} />
   <HStack overflow={"auto"} paddingY={"2"} css={{'&::-webkit-scrollbar':{display:'none',}}}>
   {
    catagory.map((item,index)=>(
        <Button minW={"60"} key={index} onClick={()=>setCategory(item)}><Text children={item}/></Button>
    ))
   }
   </HStack>
   <Stack direction={['column','row']} flexWrap="wrap" justifyContent={['flex-start','space-evenly']} alignItems={['center','flex-start']} marginTop={"10px"}>


   <CourseCard/>
   </Stack>

   </Container>
  )
}

export default Courses
