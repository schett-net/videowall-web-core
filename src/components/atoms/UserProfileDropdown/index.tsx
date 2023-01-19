import {
  Avatar,
  Box,
  HStack,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  MenuOptionGroup,
  MenuItemOption,
  MenuDivider,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  Button,
} from "@chakra-ui/react";
import * as React from "react";
import { Link } from "react-router-dom";
import { useDisclosures } from "../../../hooks/useDisclosure";
import useLogout from "../../../hooks/useLogout";
import { KanbonAvatar } from "../KanbonAvatar/index";

interface UserProfileDropdownProps {
  name: string;
  email: string;
}

export const UserProfileDropdown = (props: UserProfileDropdownProps) => {
  const { name, email } = props;

  const logout = useLogout();
  const disc = useDisclosures();

  return (
    <Menu>
      <MenuButton>
        <HStack spacing="3" ps="2" cursor="pointer">
          <KanbonAvatar
            width="40px"
            height="40px"
            data={{
              sex: "man",
            }}
          />
        </HStack>
      </MenuButton>
      <MenuList>
        <Box textAlign="center" mb="4" px="4">
          <Text fontWeight="bold">{name}</Text>
          <Text color="muted">{email}</Text>
        </Box>
        <MenuGroup>
          <MenuItem onClick={logout}>Log out</MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};
