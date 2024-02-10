// "use client";
import { extendTheme } from "@chakra-ui/react";
import { ButtonStyles as Button } from "./components/Button";
import { linkTheme as Link } from "./components/Link";
import { inputTheme as input } from "./components/input";
import { boxTheme as Box } from "./components/Box";
import { menuTheme as Menu } from "./components/Menu";
import { colors } from "./foundations/color";

export const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors,
  // fonts: {
  //   body: "system-ui, sans-serif",
  //   heading: "Georgia, serif",
  //   mono: "Menlo, monospace",
  // },
  // ... more styles
  components: {
    Button,
    Link,
    input,
    Menu,
    Box,
  },
  styles: {
    global: {
      body: {
        bg: "white",
        color: "black",
      },
      // other global styles...
    },
  },
});
