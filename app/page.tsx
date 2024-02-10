"use client";
/* eslint-disable react/jsx-no-undef */
import Image from "next/image";
import Head from "next/head";
import { Center, Spinner, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push('/Initial/Signup');
  }, []);

  return (
    <>
      <Head>
        <Text>Welcome to Pro Fitness!</Text>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* <Text>start learNing today you will get tomorrow better</Text> */}
      </main>
    </>
  );
}
