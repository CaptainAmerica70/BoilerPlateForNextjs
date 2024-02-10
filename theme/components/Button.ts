// theme/components/button.js
export const ButtonStyles = {
  // The styles all button have in common
  baseStyle: {
    fontWeight: "bold", // Normally, it is "semibold"
  },
  // The size values
  sizes: {
    xl: {
      h: "56px",
      fontSize: "lg",
      px: "32px",
    },
  },
  // The variant values
  variants: {
    outline: {
      width: "464px",
      height: "46px",
      padding: "10px 34px",
      borderRadius: "20px",
      border: "1px solid",
      gap: "16px",
    },
    outline1: {
      width: "57px",
      height: "46px",
      padding: "10px 34px",
      borderRadius: "8px",
      border: "1px solid",
      gap: "8px",
    },
    solid: {
      boxShadow: "0 0 2px 2px #efdfde",
    },

    // ... more variants
  },
  // The default size and variant values
  defaultProps: {
    size: "md",
    variant: "with-shadow",
  },
};
