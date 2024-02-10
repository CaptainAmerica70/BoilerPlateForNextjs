import { defineStyleConfig } from "@chakra-ui/react";

export const boxTheme = defineStyleConfig({
  variants: {
    main: (props) => {
      return {
        bg: "white",
        boxShadow: "0px 0px 4px 0px rgba(156, 156, 171, 0.20)",
      };
    },
    // Add more variants as needed
  },
});
