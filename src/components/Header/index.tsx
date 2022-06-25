import { Link } from "react-scroll";
import {
  Flex,
  Heading,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { NavBar } from "../NavBar";
import { AiOutlineMenu } from "react-icons/ai";

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      justifyContent="space-between"
      h="100px"
      bg="rgba(2, 3, 5, 0.8)"
      py="30px"
      position="fixed"
      w="100vw"
      zIndex="1"
    >
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody bg="darkblue.500">
            <NavBar />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Flex
        h="100%"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        w="max-content"
        maxWidth="100%"
      >
        <Heading
          color="white"
          borderRadius="8px"
          borderColor="green.200"
          fontSize={["16px", "16px", "16px", "26px"]}
          pl="15px"
        >
          &lt;Isaac Xavier&gt;
        </Heading>
      </Flex>
      <Button
        border="none"
        bg="none"
        h="max-content"
        w="max-content"
        fontSize="24px"
        display={["block", "block", "block", "none"]}
        _hover={{ border: "none", bg: "none" }}
        onClick={onOpen}
      >
        <AiOutlineMenu />
      </Button>
      <Flex display={["none", "none", "none", "flex"]}>
        <NavBar />
      </Flex>
    </Flex>
  );
};
