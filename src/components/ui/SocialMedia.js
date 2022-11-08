import { Icon, IconButton, Link, Stack } from "@chakra-ui/react";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const SocialMedia = (props) => {
  const style = {
    color: "gray.700",
    hoverColor: "primary",
  };

  return (
    <Stack {...props}>
      <IconButton
        color={style.color}
        _hover={{ color: style.hoverColor }}
        href="mailto:anzarali1999@gmail.com"
        size="lg"
        variant="link"
        as={Link}
        icon={<Icon boxSize={6} as={FaEnvelope} />}
      />
      <IconButton
        color={style.color}
        _hover={{ color: style.hoverColor }}
        href="https://github.com/anzarali123"
        isExternal
        size="lg"
        variant="link"
        as={Link}
        icon={<Icon boxSize={6} as={FaGithub} />}
      />
      <IconButton
        color={style.color}
        _hover={{ color: style.hoverColor }}
        href="https://www.linkedin.com/in/anzar-ali-8a82b2214/"
        isExternal
        size="lg"
        variant="link"
        as={Link}
        icon={<Icon boxSize={6} as={FaLinkedin} />}
      />
      <IconButton
        color={style.color}
        _hover={{ color: style.hoverColor }}
        href=""
        isExternal
        size="lg"
        variant="link"
        as={Link}
        icon={<Icon boxSize={6} as={FaInstagram} />}
      />
    </Stack>
  );
};

export default SocialMedia;
