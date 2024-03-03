import { Button, VStack } from "@chakra-ui/react";
import React from "react";
import { RiAddCircleFill, RiDashboardFill, RiEyeFill, RiUser3Fill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {

  const lacation=useLocation();

  return (
    <VStack
      spacing={8}
      padding={16}
      boxShadow={"-2px 0 10px rgba(107,70,193,0.5)"}
    >
      <LinkButtion url={'dasbord'} Icon={RiDashboardFill} text={"Dashboard"} active={location.pathname==='/admin/dasbord'}/>
      <LinkButtion url={'createcourse'} Icon={RiAddCircleFill} text={"CreateCourse"} active={location.pathname==='/admin/createcourse'}/>
      <LinkButtion url={'courses'} Icon={RiEyeFill} text={"Courses"} active={location.pathname==='/admin/courses'}/>
      <LinkButtion url={'users'} Icon={RiUser3Fill} text={"Users"} active={location.pathname==='/admin/users'}/>
    </VStack>
  );
};

export default SideBar;

const LinkButtion=({url,Icon,text,active})=>
(
  <Link to={`/admin/${url}`}>
        <Button fontSize={"larger"} variant={"ghost"} colorScheme={active?'purple':''}>
          <Icon className="m-1" />
          {
            text
          }
        </Button>
      </Link>
)
