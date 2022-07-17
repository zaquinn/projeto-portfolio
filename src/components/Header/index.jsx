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
      justifyContent={["flex-end", "flex-end", "flex-end", "center"]}
      h="12vh"
      bg="transparent"
      py="30px"
      w="100%"
      maxWidth="100vw"
      alignItems="center"
    >
      <Drawer
        placement="right"
        onClose={onClose}
        isOpen={isOpen}
        size={["full", "xs"]}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody
            bgGradient="linear(to-b, darkblue.600, darkblue.500, darkblue.400)"
            p="0px"
          >
            <Flex
              w="100%"
              justifyContent="flex-end"
              h="12vh"
              alignItems="center"
            >
              <Button
                border="none"
                bg="none"
                h="max-content"
                w="max-content"
                fontSize="24px"
                _hover={{ border: "none", bg: "none" }}
                onClick={onClose}
              >
                <AiOutlineMenu />
              </Button>
            </Flex>
            <Flex
              color="cpunk.400"
              justifyContent="center"
              fontWeight="700"
              fontSize="50px"
            >
              <Text>&lsaquo;&rsaquo;</Text>
            </Flex>
            <NavBar onClose={onClose} />
            <Flex
              color="cpunk.400"
              justifyContent="center"
              fontWeight="700"
              fontSize="50px"
              pt="30px"
            >
              <Text>&lsaquo;/ &rsaquo;</Text>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Flex display={["block", "block", "block", "none"]}>
        <Button
          border="none"
          bg="none"
          h="max-content"
          w="max-content"
          fontSize="24px"
          _hover={{ border: "none", bg: "none" }}
          _active={{ bg: "transparent" }}
          onClick={onOpen}
        >
          <AiOutlineMenu />
        </Button>
      </Flex>
      <Flex display={["none", "none", "none", "flex"]}>
        <NavBar />
      </Flex>
    </Flex>
  );
};
