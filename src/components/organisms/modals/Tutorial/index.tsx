import React, { useState } from "react";
import { Icon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  useDisclosure,
  Heading,
  Input,
  Box,
  Tag,
  TagLabel,
  TagCloseButton,
  Wrap,
  AspectRatio,
} from "@chakra-ui/react";

export const Tutorial = (props: any) => {
  const { isOpen, onClose } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent overflow="hidden">
        <ModalHeader>Hey there!</ModalHeader>
        <ModalCloseButton />
        <ModalBody mb="5">
          <Text mb="2">
            I'm Chris, Co-Founder of PersonaForge. 🧔🏻 Glad you're here! 🚀 We're
            here to help you create accurate and detailed customer personas that
            will help your business understand and connect with your target
            audience. With our AI tool, you can generate personas in just a few
            seconds, saving you time and effort. We can't wait to see what you
            accomplish with your new customer personas!
          </Text>
          <Text>
            Reach out to me on{" "}
            <a
              href="https://www.linkedin.com/in/aichnerc/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#0e76a8" }}
            >
              LinkedIn
            </a>
            !
          </Text>
        </ModalBody>
        <AspectRatio ratio={16 / 9}>
          <iframe
            title="naruto"
            src="https://www.loom.com/embed/2b264229a08d410e894c461b2d0b9372"
            allowFullScreen
          />
        </AspectRatio>
      </ModalContent>
    </Modal>
  );
};
