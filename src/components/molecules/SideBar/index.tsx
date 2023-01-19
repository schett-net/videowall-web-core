import { Icon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Progress,
  SlideFade,
  Stack,
  Text,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import {
  FiBarChart2,
  FiBookmark,
  FiCheckSquare,
  FiHelpCircle,
  FiHome,
  FiSearch,
  FiSettings,
  FiUsers,
  FiTriangle,
  FiCircle,
  FiLayers,
  FiSquare,
  FiUser,
  FiZap,
  FiLogOut,
  FiInbox,
  FiNavigation,
  FiCompass,
} from "react-icons/fi";
import { NavButton } from "../../atoms/NavButton";
import { ReactComponent as Logo } from "../../../assets/logo/personaforge.svg";
import { ReactComponent as LogoDark } from "../../../assets/logo/personaforge_darkmode.svg";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const ITEMS = {
  top: [
    {
      label: "Create a persona",
      slug: "create",
      icon: FiUser,
      disabled: false,
      iconColor: "purple.400",
    },
    undefined,
    {
      label: "Projects",
      slug: "projects",
      icon: FiLayers,
      disabled: true,
    },
    {
      label: "History",
      slug: "history",
      icon: FiBookmark,
      disabled: true,
    },
    undefined,
    {
      label: "Users",
      slug: "users",
      icon: FiUser,
      disabled: true,
    },
  ],
  bottom: [
    {
      label: "Settings",
      slug: "settings",
      icon: FiSettings,
      disabled: false,
    },
    {
      label: "Request a feature",
      slug: "feature",
      icon: FiInbox,
      disabled: false,
      link: "https://personaforge.canny.io/feature-requests",
    },
    {
      label: "Roadmap",
      slug: "roadmap",
      icon: FiCompass,
      disabled: false,
      link: "https://personaforge.canny.io",
    },
  ],
};

const SideBarItems = ({ menu }: { menu: any }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return menu?.map(
    (
      item: {
        label?: any;
        slug?: any;
        icon?: any;
        disabled: boolean;
        iconColor?: string;
        link?: string;
      },
      i: number
    ) => {
      // Check if current route matches slug
      const isActive =
        window?.location?.pathname.includes(item?.slug) ||
        (item?.slug === "create" && window?.location?.pathname === "/");

      return item ? (
        <NavButton
          key={item.slug}
          disabled={item.disabled}
          label={item.label}
          icon={item.icon}
          iconColor={item.iconColor}
          link={item.link}
          onClick={() => {
            if (item.link) {
              window.open(item.link, "_blank");
            } else navigate(`/${item.slug}`);
          }}
          aria-current={isActive ? "page" : undefined}
        />
      ) : (
        <Divider key={`divider-${i}`} />
      );
    }
  );
};

export const SideBar = () => {
  const { t } = useTranslation();

  const getSideBarTranslation = (position: string) => {
    switch (position) {
      case "top":
        return ITEMS.top.map((item) => {
          if (item) {
            return {
              ...item,
              //label: t(`sidebar:${item.slug}`),
              label: item.label,
            };
          }

          return item;
        });
      case "bottom":
        return ITEMS.bottom.map((item) => {
          if (item) {
            return {
              ...item,
              //label: t(`sidebar:${item.slug}`),
              label: item.label,
            };
          }

          return item;
        });
      default:
        return null;
    }
  };

  return (
    <Flex
      display={{ base: "none", md: "flex" }}
      as="section"
      bg="bg-surface"
      maxW={{ base: "full", sm: "xs" }}
      boxShadow={useColorModeValue("sm", "sm-dark")}
      height="100vh"
      overflowY="scroll"
    >
      <Flex flex="1" h="100%">
        <Stack justify="space-between" spacing="1">
          <Stack spacing={{ base: "5", sm: "6" }} shouldWrapChildren>
            <Box
              py={{ base: "6", sm: "6" }}
              px={{ base: "4", sm: "6" }}
              bg="chakra-subtle-bg"
            >
              <Box margin="auto">
                {useColorModeValue(<Logo />, <LogoDark />)}
              </Box>
            </Box>
            <Stack spacing="1.5" px={{ base: "4", sm: "6" }}>
              <SideBarItems menu={getSideBarTranslation("top")} />
            </Stack>
          </Stack>
          <Stack
            spacing={{ base: "5", sm: "6" }}
            py={{ base: "6", sm: "8" }}
            px={{ base: "4", sm: "6" }}
          >
            <Stack spacing="1.5">
              <SideBarItems menu={getSideBarTranslation("bottom")} />
            </Stack>
            <Box bg="bg-subtle" px="4" py="5" borderRadius="lg">
              <Stack spacing="4">
                <Stack spacing="1">
                  <Text fontSize="sm" fontWeight="medium">
                    Free quota
                  </Text>
                  <Text fontSize="sm" color="muted">
                    This is an Alpha version of PersonaForge. You can use it for
                    free.
                  </Text>
                </Stack>
                <Progress
                  value={100}
                  size="sm"
                  aria-label="Profile Update Progress"
                />
                <HStack spacing="3">
                  <Button
                    variant="link"
                    size="sm"
                    colorScheme="blue"
                    isDisabled
                  >
                    Upgrade
                  </Button>
                </HStack>
              </Stack>
            </Box>
            <Divider />
            <HStack w="100%"></HStack>
          </Stack>
        </Stack>
      </Flex>
    </Flex>
  );
};
