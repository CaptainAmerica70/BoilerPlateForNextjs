// theme.js
import { defineStyleConfig } from "@chakra-ui/react";

export const menuTheme = defineStyleConfig({
  variants: {
    main: (props) => {
      return {
        menuButton: {
          fontSize: "16px",
          color: "gray.700",
        },
        menuList: {
          bg: "white",
          borderColor: "gray.200",
        },
      };
    },
    // Add more variants as needed
  },
});
