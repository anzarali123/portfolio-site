import { Stack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";

const hoverStyle = { color: "primary" };

const NavbarLinks = (props) => {
  const { home, onClick, ...rest } = props;
  return (
    <Stack {...rest}>
      {home ? (
        <Link onClick={onClick} _hover={hoverStyle} as={RouterLink} to="/">
          Home
        </Link>
      ) : null}
      <Link onClick={onClick} _hover={hoverStyle} as={RouterLink} to="/about">
        About
      </Link>
      <Link
        onClick={onClick}
        _hover={hoverStyle}
        as={RouterLink}
        to="/projects"
      >
        Projects
      </Link>
    </Stack>
  );
};

export default NavbarLinks;
