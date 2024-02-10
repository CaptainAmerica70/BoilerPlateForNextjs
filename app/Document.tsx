"use client";
import { ReactNode } from "react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

// import { theme, COLOR_MODE_STORAGE_KEY } from "@/theme";
import { theme } from "@/theme";

export const Document = ({ children }: { children: ReactNode }) => {
  return (
    <ChakraProvider theme={theme}>
      {/* <ColorModeScript
        initialColorMode={theme.config.initialColorMode}
        storageKey={COLOR_MODE_STORAGE_KEY}
      /> */}
      {children}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </ChakraProvider>
  );
};
