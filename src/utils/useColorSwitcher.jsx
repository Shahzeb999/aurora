import { useColorModeValue } from "@chakra-ui/react";

const useColorSwitcher = () => {
  const colorLight = useColorModeValue("default.light", "default.dark");
  const colorDark = useColorModeValue("default.dark", "default.light");
  const hoverLight = useColorModeValue("neutral.50", "neutral.800");
  const hoverDark = useColorModeValue("neutral.800", "neutral.100");

  const secondary = useColorModeValue("blue.500", "green.200");

  const greyBg = useColorModeValue("neutral.300", "neutral.500");
  const lightGreyBg = useColorModeValue("neutral.100", "neutral.700");
  const aroundPhoto = useColorModeValue("blue.300","blue.500");
  return {
    colorLight,
    colorDark,
    hoverLight,
    hoverDark,
    secondary,
    greyBg,
    lightGreyBg,
    aroundPhoto,
  };
};

export default useColorSwitcher;
