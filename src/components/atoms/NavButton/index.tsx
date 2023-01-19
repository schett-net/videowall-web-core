import {
  As,
  Button,
  ButtonProps,
  HStack,
  Icon,
  Text,
  Badge,
} from "@chakra-ui/react";
import React from "react";
import { FiExternalLink } from "react-icons/fi";

interface NavButtonProps extends ButtonProps {
  icon: As;
  label: string;
  disabled: boolean;
  iconColor?: string;
  link?: string;
}

export const NavButton = (props: NavButtonProps) => {
  const { icon, disabled, label, iconColor, link, ...buttonProps } = props;
  return (
    <Button
      variant="ghost"
      justifyContent="start"
      {...buttonProps}
      disabled={disabled}
    >
      <HStack spacing="3">
        <Icon as={icon} boxSize="6" color={iconColor || "subtle"} />
        <Text>
          {label}
          {link && (
            <Icon as={FiExternalLink} boxSize="3" color="subtle" ml="1" />
          )}
        </Text>
        {disabled && <Badge size="sm">Coming soon</Badge>}
      </HStack>
    </Button>
  );
};
