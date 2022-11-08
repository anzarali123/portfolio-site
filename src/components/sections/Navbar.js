import { Flex, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CustomDrawer from "../ui/CustomDrawer";
import NavbarLinks from "../ui/NavbarLinks";

const Navbar = () => {
  return (
    <Flex
      zIndex="docked"
      position="sticky"
      top="0"
      py="3"
      boxShadow="base"
      justify="center"
      align="center"
      as="header"
      bg="white"
    >
      <Flex
        align="center"
        as="nav"
        direction="row"
        h="full"
        w={{ base: "90%", lg: "80%", xl: "1040px" }}
      >
        <Link
          to="/"
          style={{
            fontWeight: "bold",
            fontSize: "30px",
            fontFamily: "monospace",
            color: "#312e81",
          }}
        >
          Anzar
        </Link>
        <Spacer />
        <NavbarLinks
          display={{ base: "none", lg: "block" }}
          fontSize="1.1rem"
          spacing="2rem"
          direction="row"
          home={false}
        />
        <CustomDrawer />
      </Flex>
    </Flex>
  );
};

export default Navbar;
