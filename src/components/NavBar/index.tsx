import { Link } from "react-scroll";
import { Flex, Text } from "@chakra-ui/react";
import {
  AiOutlineHome,
  AiOutlineBulb,
  AiOutlineComment,
  AiOutlineCodeSandbox,
  AiOutlineIdcard,
} from "react-icons/ai";
import "./styles.css";

export const NavBar = () => {
  return (
    <Flex
      as="nav"
      pt={["30px", "30px", "30px", "initial"]}
      h={["300px", "300px", "300px", "100%"]}
      w={["max-content", "max-content", "max-content", "600px"]}
      justifyContent="space-between"
      flexDirection={["column", "column", "column", "row"]}
    >
      <Flex alignItems="center" pr="15px">
        <Link
          className="buttonHeader"
          activeClass="buttonHeader--Active"
          to="section1"
          spy={true}
          duration={1200}
        >
          <Text as="span" fontSize="24px" pr="8px">
            <AiOutlineHome />
          </Text>
          Home
        </Link>
      </Flex>
      <Flex alignItems="center" pr="15px">
        <Link
          className="buttonHeader"
          activeClass="buttonHeader--Active"
          to="section2"
          spy={true}
          duration={1200}
        >
          <Text as="span" fontSize="24px" pr="8px">
            <AiOutlineIdcard />
          </Text>
          Sobre mim
        </Link>
      </Flex>
      <Flex alignItems="center" pr="15px">
        <Link
          className="buttonHeader"
          activeClass="buttonHeader--Active"
          to="section3"
          spy={true}
          duration={1200}
        >
          <Text as="span" fontSize="24px" pr="8px">
            <AiOutlineBulb />
          </Text>
          Projetos
        </Link>
      </Flex>
      <Flex alignItems="center" pr="15px">
        <Link
          className="buttonHeader"
          activeClass="buttonHeader--Active"
          to="section4"
          spy={true}
          duration={1200}
        >
          <Text as="span" fontSize="24px" pr="8px">
            <AiOutlineCodeSandbox />
          </Text>
          Tecnologias
        </Link>
      </Flex>
      <Flex alignItems="center" pr="15px">
        <Link
          className="buttonHeader"
          activeClass="buttonHeader--Active"
          to="section5"
          spy={true}
          duration={1200}
        >
          <Text as="span" fontSize="24px" pr="8px">
            <AiOutlineComment />
          </Text>
          Contato
        </Link>
      </Flex>
    </Flex>
  );
};
