import { Button, Flex, Text } from "@chakra-ui/react";

import {
  AiOutlineHome,
  AiOutlineBulb,
  AiOutlineComment,
  AiOutlineCodeSandbox,
  AiOutlineIdcard,
} from "react-icons/ai";
import { useHistory, useLocation } from "react-router-dom";

export const NavBar = ({ onClose }) => {
  const history = useHistory();
  const location = useLocation();
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
          color={location.pathname === "/" ? "cpunk.400" : ""}
          display="flex"
          alignItems="center"
          onClick={() => {
            history.push("/");
            onClose && onClose();
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
          color={location.pathname === "/About" ? "cpunk.400" : ""}
          display="flex"
          alignItems="center"
          onClick={() => {
            history.push("/About");
            onClose && onClose();
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
          color={location.pathname === "/Projects" ? "cpunk.400" : ""}
          display="flex"
          alignItems="center"
          onClick={() => {
            history.push("/Projects");
            onClose && onClose();
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
          color={location.pathname === "/Techs" ? "cpunk.400" : ""}
          display="flex"
          alignItems="center"
          onClick={() => {
            history.push("/Techs");
            onClose && onClose();
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
          borderColor={
            location.pathname === "/Contact" ? "cpunk.400" : "transparent"
          }
          _hover={{ color: "cpunk.400" }}
          _active={{ bg: "transparent" }}
          color={location.pathname === "/Contact" ? "cpunk.400" : ""}
          display="flex"
          alignItems="center"
          onClick={() => {
            history.push("/Contact");
            onClose && onClose();
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
