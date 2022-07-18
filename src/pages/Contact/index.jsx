import {
  Flex,
  Heading,
  Link,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { useHistory } from "react-router-dom";
import {
  AiFillLinkedin,
  AiOutlineLeft,
  AiFillGithub,
  AiOutlineWhatsApp,
  AiOutlineMail,
} from "react-icons/ai";

export const Contact = () => {
  const history = useHistory();

  return (
    <Flex
      minH="100vh"
      flexDirection="column"
      alignItems="center"
      w="100%"
      maxWidth="100vw"
      justifyContent="space-between"
      overflow="hidden"
    >
      <Header />
      <Flex
        bg="transparent"
        direction="column"
        pb="50px"
        alignItems="center"
        w="100%"
      >
        <Flex justifyContent="center">
          <Heading
            textShadow="rgb(232, 0, 116) 2px 2px, rgb(0, 207, 229) -1px -1px;"
            fontSize="45px"
            mb={["20px", "20px", "20px", "40px"]}
            textAlign="center"
          >
            &lsaquo;Contato&rsaquo;
          </Heading>
        </Flex>
        <Flex
          w="280px"
          h="500px"
          borderRadius="8px"
          boxShadow="rgb(232, 0, 116) 10px 10px, rgb(0, 207, 229) -10px -10px;"
          direction="column"
        >
          <List spacing={6}>
            <ListItem>
              <ListIcon as={AiFillLinkedin} color="gray.200" fontSize="30px" />
              <Link
                href="https://www.linkedin.com/in/isaac-xavier-dev/"
                isExternal
                fontSize="20px"
              >
                LinkedIn
              </Link>
            </ListItem>
            <ListItem>
              <ListIcon as={AiFillGithub} color="gray.200" fontSize="30px" />
              <Link
                href="https://github.com/zaquinn"
                isExternal
                fontSize="20px"
              >
                GitHub
              </Link>
            </ListItem>
            <ListItem>
              <ListIcon
                as={AiOutlineWhatsApp}
                color="gray.200"
                fontSize="30px"
              />
              <Link
                href="https://wa.me/+5561983775185"
                isExternal
                fontSize="20px"
              >
                WhatsApp
              </Link>
            </ListItem>
            <ListItem fontSize="20px">
              <ListIcon as={AiOutlineMail} color="gray.200" fontSize="30px" />
              ayzick120@gmail.com
            </ListItem>
          </List>
        </Flex>
      </Flex>
      <Flex direction="row" w="180px" justifyContent="center" align="center">
        <Flex
          color="gray.400"
          bg="transparent"
          fontSize={["70px", "80px"]}
          onClick={() => history.push("/Techs")}
        >
          <AiOutlineLeft cursor="pointer" />
        </Flex>
      </Flex>
      <Flex as="footer" fontSize="12px" pt="30px">
        <Text>&lsaquo;/Desenvolvido com ♥ por Isaac&rsaquo;</Text>
      </Flex>
    </Flex>
  );
};
