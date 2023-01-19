import React from "react";
import {
  Button,
  Container,
  Text,
  Box,
  Flex,
  useColorModeValue,
  Heading,
  HStack,
  VStack,
  Icon,
  Badge,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  InputRightElement,
  InputGroup,
  useTheme,
  Checkbox,
  useToast,
} from "@chakra-ui/react";
import {
  FiAlertCircle,
  FiArrowRight,
  FiAward,
  FiCheck,
  FiCreditCard,
  FiSmile,
} from "react-icons/fi";
import { getData } from "./useData";
import { KanbonCarousel } from "../../organisms/Carousel/index";
import Lottie from "lottie-react";

export type attachment = {
  src: string[];
  type: string;
  url: string;
};

export type dataType = {
  attachments: attachment[];
  id: string;
  link: string;
  message: string;
  page: string;
};

const dummy = require("./dummy.json");

const DUMMY: dataType[] = JSON.parse(dummy.data.getPageFeed);
console.log(DUMMY);

const Main = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [data, setData] = React.useState<any>([]);
  const [isInitialized, setIsInitialized] = React.useState<boolean>(false);

  const getVideoWall = async () => {
    try {
      if (!isInitialized) {
        setLoading(true);
      }

      const res = await getData();

      setData(res);

      console.log(res);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setIsInitialized(true);
    }
  };

  React.useEffect(() => {
    if (!isInitialized) {
      getVideoWall();
    }

    // Refetch once every 30 minutes
    const interval = setInterval(() => {
      getVideoWall();
    }, 1000 * 60 * 30);

    return () => clearInterval(interval);
  });

  return (
    <Box>
      {loading ? (
        <Flex h="100vh" w="100vw" justifyContent="center" alignItems="center">
          <Lottie
            animationData={require("../../../assets/lottie/loading.json")}
            loop
            style={{ width: 200, maxWidth: "80%" }}
          />
        </Flex>
      ) : (
        <>
          {data && data.length > 0 ? (
            <KanbonCarousel data={DUMMY} />
          ) : (
            <Flex
              h="100vh"
              w="100vw"
              justifyContent="center"
              alignItems="center"
            >
              <Text>No data found</Text>
            </Flex>
          )}
        </>
      )}
    </Box>
  );
};

export default Main;
