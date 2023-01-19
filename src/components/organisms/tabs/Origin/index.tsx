// React Router
import { Flex } from "@chakra-ui/react";
import { Navigate, Outlet } from "react-router-dom";
import { SideBar } from "../../../molecules/SideBar/index";
import { TabFooter } from "../../../molecules/TabFooter/index";
import { TabHeader } from "../../../molecules/TabHeader/index";

export const Origin = () => {
  //const { currentUser } = useAuth();

  //if (currentUser === null) return <Navigate to="/login" />;

  return (
    <Flex height="100%">
      <SideBar />
      <Flex
        flex={1}
        direction="column"
        height="100%"
        overflowY="scroll"
        overflowX="hidden"
      >
        <TabHeader hideLogo />
        <Flex
          textAlign="center"
          fontSize="xl"
          flex={1}
          justify="center"
          align="center"
        >
          <Outlet />
        </Flex>
        <TabFooter />
      </Flex>
    </Flex>
  );
};
