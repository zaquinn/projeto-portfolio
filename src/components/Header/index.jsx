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
      h="12vh"
      bg="rgba(2, 3, 5, 0.8)"
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
          <DrawerBody bg="darkblue.500" p="0px">
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
            <NavBar onClose={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Flex
        h="100%"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        w="max-content"
        maxWidth="50%"
      >
        <Heading
          color="white"
          borderRadius="8px"
          borderColor="green.200"
          fontSize={["16px", "18px", "24px", "26px"]}
          pl="15px"
        >
          &lt;Isaac Xavier&gt;
        </Heading>
      </Flex>
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
