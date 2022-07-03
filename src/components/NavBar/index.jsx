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

export const NavBar = ({ onClose }) => {
  const { shouldRender, setShouldRender } = useContext(RenderContext);
  return (
    <Flex
      as="nav"
      pt={["30px", "30px", "30px", "initial"]}
      h={["300px", "300px", "300px", "100%"]}
      w={["", "", "", "90%"]}
      justifyContent="space-between"
      flexDirection={["column", "column", "column", "row"]}
      alignItems={["center", "center", "center", "center"]}
    >
      <Flex
        flexDirection={["column", "column", "column", "row"]}
        w={["max-content", "max-content", "max-content", "100%"]}
        alignItems={["flex-start", "flex-start", "flex-start", "center"]}
        justifyContent={[
          "space-between",
          "space-between",
          "space-between",
          "flex-start",
        ]}
        h="100%"
      >
        <Button
          bg="transparent"
          borderRadius="0px"
          _hover={{ color: "cpunk.400" }}
          _active={{ bg: "transparent" }}
          color={shouldRender === "Home" ? "cpunk.400" : ""}
          display="flex"
          alignItems="center"
          onClick={() => {
            setShouldRender("Home");
            onClose();
          }}
          justifyContent="center"
        >
          <Text as="span" fontSize="24px" paddingRight="8px">
            <AiOutlineHome />
          </Text>
          Home
        </Button>

        <Button
          bg="transparent"
          borderRadius="0px"
          _hover={{ color: "cpunk.400" }}
          _active={{ bg: "transparent" }}
          color={shouldRender === "About" ? "cpunk.400" : ""}
          display="flex"
          alignItems="center"
          onClick={() => {
            setShouldRender("About");
            onClose();
          }}
          justifyContent="center"
        >
          <Text as="span" fontSize="24px" paddingRight="8px">
            <AiOutlineIdcard />
          </Text>
          Sobre mim
        </Button>

        <Button
          bg="transparent"
          borderRadius="0px"
          _hover={{ color: "cpunk.400" }}
          _active={{ bg: "transparent" }}
          color={shouldRender === "Projects" ? "cpunk.400" : ""}
          display="flex"
          alignItems="center"
          onClick={() => {
            setShouldRender("Projects");
            onClose();
          }}
          justifyContent="center"
        >
          <Text as="span" fontSize="24px" paddingRight="8px">
            <AiOutlineBulb />
          </Text>
          Projetos
        </Button>

        <Button
          bg="transparent"
          borderRadius="0px"
          _hover={{ color: "cpunk.400" }}
          _active={{ bg: "transparent" }}
          color={shouldRender === "Techs" ? "cpunk.400" : ""}
          display="flex"
          alignItems="center"
          onClick={() => {
            setShouldRender("Techs");
            onClose();
          }}
          justifyContent="center"
        >
          <Text as="span" fontSize="24px" paddingRight="8px">
            <AiOutlineCodeSandbox />
          </Text>
          Tecnologias
        </Button>

        <Button
          bg="transparent"
          borderRadius="0px"
          borderBottom="2px solid"
          borderColor={shouldRender === "Contact" ? "cpunk.400" : "transparent"}
          _hover={{ color: "cpunk.400" }}
          _active={{ bg: "transparent" }}
          color={shouldRender === "Contact" ? "cpunk.400" : ""}
          display="flex"
          alignItems="center"
          onClick={() => {
            setShouldRender("Contact");
            onClose();
          }}
          justifyContent="center"
        >
          <Text as="span" fontSize="24px" paddingRight="8px">
            <AiOutlineComment />
          </Text>
          Contato
        </Button>
      </Flex>
    </Flex>
  );
};
