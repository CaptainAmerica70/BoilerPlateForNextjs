import { defineStyleConfig } from "@chakra-ui/react";

export const inputTheme = defineStyleConfig({
  variants: {
    outline: (props) => {
      return {
        field: {
          bg: "white",
          border: "1.5px solid",
          borderColor: "neutral.150",
          borderRadius: "8px",
          lineHeight: "145%",
          color: "black",
          textStyle: "secondary.bodySR",
          fontSize: { sm: "12px", lg: "14px" },
          h: "auto",
          maxH: "50px",
          p: "15px",
          _placeholder: {
            color: "neutral.400",
            fontWeight: 500,
          },
          _focusVisible: {
            borderColor: "neutral.150",
            boxShadow: "0px 0px 4px 0px rgba(156, 156, 171, 0.20)",
          },
        },
      };
    },
  },
});
