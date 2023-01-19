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

const Main = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [data, setData] = React.useState<any>([]);

  const getVideoWall = async () => {
    try {
      setLoading(true);

      const res = await getData();

      console.log(res);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    // Refetch once every 30 minutes
    const interval = setInterval(() => {
      getVideoWall();
    }, 1000 * 60 * 30);

    return () => clearInterval(interval);
  });

  return (
    <Container maxW="container.sm" py="10">
      {loading ? <Text>Loading...</Text> : <Text>Test</Text>}
    </Container>
  );
};

export default Main;
