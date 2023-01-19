import { Icon } from "@chakra-ui/icons";
import { Box, Button } from "@chakra-ui/react";
import { MdHelp } from "react-icons/md";
import { useDisclosures } from "../../../hooks/useDisclosure";
import * as React from "react";

export const TabFooter = () => {
  const disc = useDisclosures();

  return (
    <Box p={3}>
      <Button onClick={disc.tutorialModal?.onOpen}>
        <Icon as={MdHelp} color="muted" mr="1" /> Tutorial
      </Button>
    </Box>
  );
};
