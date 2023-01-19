import { Icon } from "@chakra-ui/icons";
import {
  Box,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
  Flex,
  HStack,
  Kbd,
  Text,
  IconButton,
  Tooltip,
  useTheme,
  useColorMode,
} from "@chakra-ui/react";
import { FiGrid, FiLogOut, FiSearch, FiUser, FiZap } from "react-icons/fi";

import { ColorModeSwitcher } from "../../atoms/ColorModeSwitcher";
import { UserProfileDropdown } from "../../atoms/UserProfileDropdown";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { isMacOs } from "react-device-detect";
import { useSelector } from "react-redux";
import { Button, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const getOs = () => {
  const os = ["Windows", "Mac"]; // add your OS values

  return os.find(
    (v) => (global as any).window?.navigator.platform.indexOf(v) >= 0
  );
};

export const TabHeader = ({ disableSearch, hideLogo }: any) => {
  const { colors } = useTheme();

  return (
    <Flex justify="space-between" p="5">
      <HStack spacing={3} flex="0.5 1 0" justify="flex-end">
        <ColorModeSwitcher />
      </HStack>
    </Flex>
  );
};
