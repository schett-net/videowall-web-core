import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Box, Flex, Text } from "@chakra-ui/react";
import { dataType } from "../../pages/Main/index";

/* const IMAGES = [
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg",
  "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
  "https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
]; */

export const KanbonCarousel: React.FC<{
  data: dataType[];
}> = ({ data }) => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      showArrows={false}
      interval={15000}
    >
      {data.map(({ id, attachments, link, message, page }, i) => {
        const url = attachments[0].src[0];

        return (
          <Box h="100vh" position="relative" key={id}>
            <Flex position="relative" h="100%" maxW="70%" zIndex="1" m="auto">
              <Flex
                bg="rgba(255, 255, 255, 0.7)"
                py="10"
                px="5"
                boxShadow="0px 0px 1px rgba(48, 49, 51, 0.05),0px 16px 24px rgba(48, 49, 51, 0.1)"
                alignItems="center"
                pr="5rem"
              >
                <Text fontSize="1.5rem" textAlign="left">
                  {message}
                </Text>
              </Flex>
              <img
                src={url}
                style={{
                  position: "relative",
                  maxWidth: "60%",
                  height: "100%",
                  objectFit: "contain",
                  marginLeft: "-4rem",
                  /* boxShadow:
                    "0px 0px 1px rgba(48, 49, 51, 0.1),0px 16px 24px rgba(48, 49, 51, 0.2)", */
                }}
              />
            </Flex>
            <img
              src={url}
              style={{
                position: "absolute",
                objectFit: "cover",
                width: "110%",
                height: "110%",
                top: "-5%",
                left: "-5%",
                filter: "blur(20px)",
                zIndex: 0,
              }}
            />
          </Box>
        );
      })}
    </Carousel>
  );
};
