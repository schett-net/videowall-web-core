import React, { useEffect } from "react";
import { useToken, useColorModeValue, SkeletonCircle } from "@chakra-ui/react";
import Avatar, { genConfig, NiceAvatarProps } from "react-nice-avatar";
import useAuth from "../../../hooks/useAuth";

interface AvatarProps {
  data: NiceAvatarProps;
  height?: string;
  width?: string;
  color?: string;
}

export const KanbonAvatar = (props: AvatarProps) => {
  const { data, height = "3rem", width = "3rem", color = "gray" } = props;

  // Color name according to color mode
  const colorMode = useColorModeValue(`${color}.200`, `${color}.700`);

  // Get color from theme
  const colorValue = useToken("colors", colorMode);

  // Check if client has latest data
  const { isSynced } = useAuth();

  // Set default avatar
  const hydratedData = {
    sex: data?.sex || "man",
    //faceColor: data?.faceColor || "#F9C9B6",
    faceColor: data?.faceColor || "white",
    earSize: data?.earSize || "small",
    eyeStyle: data?.eyeStyle || "circle",
    noseStyle: data?.noseStyle || "short",
    mouthStyle: data?.mouthStyle || "smile",
    shirtStyle: data?.shirtStyle || "hoody",
    glassesStyle: data?.glassesStyle || "none",
    hairColor: data?.hairColor || "#000",
    hairStyle: data?.hairStyle || "thick",
    hatStyle: data?.hatStyle || "none",
    hatColor: data?.hatColor || "#FC909F",
    shirtColor: data?.shirtColor || "#454545",
  };

  // Inject color into config
  const config = { ...hydratedData, bgColor: colorValue };

  return isSynced ? (
    <Avatar style={{ width, height }} {...config} />
  ) : (
    <SkeletonCircle size="10" />
  );
};
