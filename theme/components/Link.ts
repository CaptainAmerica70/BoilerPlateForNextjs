// theme.js
import { defineStyleConfig } from "@chakra-ui/react";

export const linkTheme = defineStyleConfig({
  variants: {
    main: (props) => {
      return {
        color: "blue.500",
        _hover: {
          textDecoration: "underline",
        },
      };
    },
    // Add more variants as needed
  },
});
