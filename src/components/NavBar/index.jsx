import { Button, Flex, Text } from "@chakra-ui/react";
import { useContext } from "react";

import {
  AiOutlineHome,
  AiOutlineBulb,
  AiOutlineComment,
  AiOutlineCodeSandbox,
  AiOutlineIdcard,
} from "react-icons/ai";
import { RenderContext } from "../../context";

export const NavBar = () => {
  const { shouldRender, setShouldRender } = useContext(RenderContext);
  return (
    <Flex
      as="nav"
      pt={["30px", "30px", "30px", "initial"]}
      h={["300px", "300px", "300px", "100%"]}
      w={["", "", "", "90%"]}
      justifyContent="space-between"
      flexDirection={["column", "column", "column", "row"]}
      alignItems={["flex-start", "flex-start", "flex-start", "center"]}
    >
      <Button
        bg="transparent"
        borderRadius="0px"
        borderBottom="3px solid"
        borderColor="transparent"
        _hover={{ borderColor: "neon.300" }}
        _active={{ bg: "transparent" }}
        display="flex"
        alignItems="center"
        onClick={() => setShouldRender("Home")}
      >
        <Text as="span" fontSize="24px" paddingRight="8px">
          <AiOutlineHome />
        </Text>
        Home
      </Button>

      <Button
        bg="transparent"
        borderRadius="0px"
        borderBottom="3px solid"
        borderColor="transparent"
        _hover={{ borderColor: "neon.300" }}
        _active={{ bg: "transparent" }}
        display="flex"
        alignItems="center"
        onClick={() => setShouldRender("About")}
      >
        <Text as="span" fontSize="24px" paddingRight="8px">
          <AiOutlineIdcard />
        </Text>
        Sobre mim
      </Button>

      <Button
        bg="transparent"
        borderRadius="0px"
        borderBottom="3px solid"
        borderColor="transparent"
        _hover={{ borderColor: "neon.300" }}
        _active={{ bg: "transparent" }}
        display="flex"
        alignItems="center"
        onClick={() => setShouldRender("Projects")}
      >
        <Text as="span" fontSize="24px" paddingRight="8px">
          <AiOutlineBulb />
        </Text>
        Projetos
      </Button>

      <Button
        bg="transparent"
        borderRadius="0px"
        borderBottom="3px solid"
        borderColor="transparent"
        _hover={{ borderColor: "neon.300" }}
        _active={{ bg: "transparent" }}
        display="flex"
        alignItems="center"
        onClick={() => setShouldRender("Techs")}
      >
        <Text as="span" fontSize="24px" paddingRight="8px">
          <AiOutlineCodeSandbox />
        </Text>
        Tecnologias
      </Button>

      <Button
        bg="transparent"
        borderRadius="0px"
        borderBottom="3px solid"
        borderColor="transparent"
        _hover={{ borderColor: "neon.300" }}
        _active={{ bg: "transparent" }}
        display="flex"
        alignItems="center"
        onClick={() => setShouldRender("Contact")}
      >
        <Text as="span" fontSize="24px" paddingRight="8px">
          <AiOutlineComment />
        </Text>
        Contato
      </Button>
    </Flex>
  );
};
