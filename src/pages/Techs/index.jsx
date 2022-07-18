import {
  Flex,
  Heading,
  Text,
  keyframes,
  ListItem,
  List,
  ListIcon,
} from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import {
  AiOutlineRight,
  AiOutlineLeft,
  AiOutlineCheck,
  AiOutlineLoading3Quarters,
} from "react-icons/ai";

export const Techs = () => {
  const history = useHistory();

  const animationKeyframes = keyframes`
  0% { box-shadow: 0 0 0 0 rgb(232 0 116); }
  70% { box-shadow: 0 0 0 23px rgb(232 0 116 / 0%); }
  100% { box-shadow: 0 0 0 0 rgb(232 0 116 / 0%); }
`;

  const loadingKeyframes = keyframes`
    0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
  `;

  const loadingAnimation = `${loadingKeyframes} 1s linear infinite`;

  const animation = `${animationKeyframes} 2s infinite`;
  return (
    <Flex
      minH="100vh"
      flexDirection="column"
      alignItems="center"
      w="100%"
      maxWidth="100vw"
      justifyContent="space-between"
      overflow={["initial", "initial", "initial", "hidden"]}
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
            &lsaquo;Minhas tecnologias&rsaquo;
          </Heading>
        </Flex>
        <Flex
          justifyContent="space-between"
          w="100%"
          maxWidth="700px"
          direction={["column", "column", "column", "row"]}
          alignItems="center"
          h={["1050px", "1050px", "1050px", "max-content"]}
        >
          <Flex
            w="280px"
            h="500px"
            borderRadius="8px"
            boxShadow="rgb(232, 0, 116) 10px 10px, rgb(0, 207, 229) -10px -10px;"
            direction="column"
          >
            <Heading
              textShadow="rgb(232, 0, 116) 2px 2px, rgb(0, 207, 229) -1px -1px;"
              fontSize="30px"
              alignSelf="center"
            >
              Front End
            </Heading>
            <List>
              <ListItem>
                <ListIcon as={AiOutlineCheck} color="green.200" />
                React
              </ListItem>
              <ListItem>
                <ListIcon as={AiOutlineCheck} color="green.200" />
                Styled-components
              </ListItem>
              <ListItem>
                <ListIcon as={AiOutlineCheck} color="green.200" />
                JavaScript
              </ListItem>
              <ListItem>
                <ListIcon as={AiOutlineCheck} color="green.200" />
                TypeScript
              </ListItem>
              <ListItem>
                <ListIcon as={AiOutlineCheck} color="green.200" />
                Chakra UI
              </ListItem>
              <ListItem>
                <ListIcon as={AiOutlineCheck} color="green.200" />
                GIT
              </ListItem>
              <ListItem>
                <ListIcon as={AiOutlineCheck} color="green.200" />
                CSS
              </ListItem>
              <ListItem>
                <ListIcon as={AiOutlineCheck} color="green.200" />
                Consumo de API
              </ListItem>
              <ListItem>
                <ListIcon as={AiOutlineCheck} color="green.200" />
                Redux
              </ListItem>
              <ListItem>
                <ListIcon as={AiOutlineCheck} color="green.200" />
                Context API
              </ListItem>
              <ListItem>
                <ListIcon as={AiOutlineCheck} color="green.200" />
                Figma
              </ListItem>
              <ListItem>
                <ListIcon as={AiOutlineCheck} color="green.200" />
                Vercel
              </ListItem>
            </List>
          </Flex>
          <Flex
            w="280px"
            h="500px"
            borderRadius="8px"
            boxShadow="rgb(0, 207, 229) 10px 10px, rgb(232, 0, 116) -10px -10px;"
            direction="column"
          >
            <Heading
              textShadow="rgb(232, 0, 116) 2px 2px, rgb(0, 207, 229) -1px -1px;"
              fontSize="30px"
              alignSelf="center"
            >
              Back End
            </Heading>
            <List>
              <ListItem>
                <ListIcon as={AiOutlineCheck} color="green.200" />
                NodeJs
              </ListItem>
              <ListItem>
                <ListIcon as={AiOutlineCheck} color="green.200" />
                Express
              </ListItem>
              <ListItem>
                <ListIcon as={AiOutlineCheck} color="green.200" />
                PostgreSQL
              </ListItem>
              <ListItem>
                <ListIcon as={AiOutlineCheck} color="green.200" />
                API RESTFUL
              </ListItem>
              <ListItem>
                <ListIcon as={AiOutlineCheck} color="green.200" />
                Typescript
              </ListItem>
              <ListItem>
                <ListIcon as={AiOutlineCheck} color="green.200" />
                TypesORM
              </ListItem>
              <ListItem>
                <ListItem>
                  <ListIcon
                    as={AiOutlineLoading3Quarters}
                    animation={loadingAnimation}
                    color="cpunk.400"
                  />
                  Python
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={AiOutlineLoading3Quarters}
                    animation={loadingAnimation}
                    color="cpunk.400"
                  />
                  MongoDB
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={AiOutlineLoading3Quarters}
                    animation={loadingAnimation}
                    color="cpunk.400"
                  />
                  Flask
                </ListItem>
                <ListIcon as={AiOutlineCheck} color="green.200" />
                Docker
              </ListItem>
              <ListItem>
                <ListIcon as={AiOutlineCheck} color="green.200" />
                Heroku
              </ListItem>
            </List>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        direction="row"
        w="180px"
        justifyContent="space-between"
        align="center"
      >
        <Flex
          color="gray.400"
          bg="transparent"
          fontSize={["70px", "80px"]}
          onClick={() => history.push("/Projects")}
        >
          <AiOutlineLeft cursor="pointer" />
        </Flex>
        <Flex
          color="darkblue.600"
          as={motion.div}
          animation={animation}
          borderRadius="100px"
          bg="cpunk.400"
          onClick={() => history.push("/Contact")}
          fontSize={["70px", "80px"]}
        >
          <AiOutlineRight cursor="pointer" />
        </Flex>
      </Flex>
      <Flex as="footer" fontSize="12px" pt="30px">
        <Text>&lsaquo;/Desenvolvido com ♥ por Isaac&rsaquo;</Text>
      </Flex>
    </Flex>
  );
};
