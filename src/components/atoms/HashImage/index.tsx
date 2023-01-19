import {
  As,
  Button,
  ButtonProps,
  Icon,
  Text,
  Box,
  Flex,
  useColorModeValue,
  Tooltip,
  Badge,
  BoxProps,
} from "@chakra-ui/react";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Blurhash } from "react-blurhash";

interface HashImageProps extends BoxProps {
  hash: string;
  src: string;
  height: number;
  width: number;
}

export const HashImage = ({
  hash,
  src,
  height,
  width,
  ...props
}: HashImageProps) => {
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const [isLoadStarted, setIsLoadStarted] = React.useState(false);

  return (
    <Box position="relative" {...props}>
      <Box borderRadius="50" overflow="hidden">
        <LazyLoadImage
          src={src}
          width={width}
          height={height}
          onLoad={() => setImageLoaded(true)}
          beforeLoad={() => setIsLoadStarted(true)}
        />
      </Box>
      {!imageLoaded && isLoadStarted && (
        <Box
          borderRadius="50"
          width="100px"
          height="100px"
          overflow="hidden"
          zIndex={20}
          position="absolute"
          top={0}
          left={0}
        >
          <Blurhash
            hash={hash}
            width={100}
            height={width}
            resolutionX={32}
            resolutionY={32}
            punch={1}
          />
        </Box>
      )}
    </Box>
  );
};
