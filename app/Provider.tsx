
// "use client";
// import React, { FC } from "react";
// import { ChakraProvider, Text, createLocalStorageManager } from "@chakra-ui/react";
// import RootLayout from "./layout";
// import { QueryClient, QueryClientProvider } from "react-query";
// import theme, { COLOR_MODE_STORAGE_KEY } from "../theme";
// import Head from "next/head";
// import { AppProps } from "next/app";


// const localStorageManager = createLocalStorageManager(COLOR_MODE_STORAGE_KEY);

// export const Providers = ({
//   children
// }: any) => {
//   const queryClient = new QueryClient();
//   return (
//     <QueryClientProvider client={queryClient}>
//       {/* <AuthProvider> */}

//       <ChakraProvider theme={theme}>
//         <QueryClientProvider client={queryClient}>
//           <Head>
//             <Text>Welcome to Pro Fitness!</Text>
//           </Head>
//           <RootLayout>
//             {children}
//           </RootLayout>
//           {/* <ReactQueryDevtools initialIsOpen={false} /> */}
//         </QueryClientProvider>
//       </ChakraProvider>
//       {/* </AuthProvider> */}
//     </QueryClientProvider>
//   );
// };
