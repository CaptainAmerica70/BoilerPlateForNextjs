import { extendTheme } from "@chakra-ui/react";

const textTheme = extendTheme({
  variants: {
    // Define a new variant
    highlighted: {
      color: "red.500",
      fontSize: "lg",
      fontWeight: "bold",
    },
  },
});

export default textTheme;
