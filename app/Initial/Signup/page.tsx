"use client";
import InputPage from "@/components/InputField/page";
import {
  Box,
  Button,
  HStack,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { emailSchema } from "../../../Schema/email";
import { Form, Formik } from "formik";
import EmailTab from "./EmailTab";
import BadgeComponent from "@/components/Badge/Page";
import TableComponent from "@/components/Table/page";
import PhoneTab from "./PhoneTab";
import Banner1 from "@/app/Tabs/Banner1/page";
import { Carousels } from "@/components/Carousel";
const page = () => {
  const data = [
    { Exchange: ' Binance', APIKey: 'MK2.....2YnE', Passphrase: 'Engineer' },
    { Exchange: 'Coinbase Pro ', APIKey: 'MK2.....2YnE', Passphrase: 'Doctor' },
    { Exchange: ' Kraken', APIKey: 'MK2.....2YnE', Passphrase: 'Engineer' },
    { Exchange: 'Coinbase Pro ', APIKey: 'MK2.....2YnE', Passphrase: 'Doctor' },
  ];
  const columns = [
    { key: 'Exchange', heading: 'Exchange' },
    { key: 'API Key', heading: 'API Key' },
    { key: 'API Secret', heading: 'API Secret' },
    { key: 'Passphrase', heading: 'Passphrase' },
    { key: 'Action', heading: 'Action' },
  ];

  return (
    <>
      <HStack gap={'10px'} >
        <Stack width={"50%"}>
          <Box pt="10.33%" pl="15.19%">
            <Stack>
              <HStack>
                <Text textStyle={"primary.h3"} textColor={"Main.100"}>
                  Create an Account
                </Text>
                <Stack>
                  <BadgeComponent className="w-44 h-9 p-2 gap-2 text-center" color={"Neutral.BadgeBg"} textColor={"Neutral.BadgeText"} borderRadius={'5px'}>Step 1/2 to get $25</BadgeComponent>
                </Stack>
              </HStack>
              <Text textStyle={"secondary.bodyLM"} textColor={"#9C9CAB"}>
                Get Connected with industry best web designer and developer Sign up
                with us today!
              </Text>
            </Stack>
            <Tabs>
              <TabList gap={"19px"}>
                <Tab
                  color={"#717184"}
                  _selected={{
                    color: "black",
                    borderBottomColor: "#118E52",
                    fontWeight: "600",
                  }}
                >
                  <Text textStyle={"secondary.bodyLM"}>Phone</Text>
                </Tab>
                <Tab
                  color={"#717184"}
                  _selected={{
                    color: "black",
                    borderBottomColor: "#118E52",
                    fontWeight: "600",
                  }}
                >
                  <Text textStyle={"secondary.bodyLM"}>Email</Text>
                </Tab>
              </TabList>
              <TabPanels width={"500px"} height={"500px"}>
                <TabPanel width={"500px"} height={"500px"}>
                  <Box p={4}>this is tab
                    <PhoneTab />
                  </Box>
                </TabPanel>
                <TabPanel width={"500px"} height={"500px"}>
                  <Box>
                    <EmailTab />
                  </Box>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Stack>
        {/* <Image srcSet='/images/jurica-koletic-efqnM0zWh54-unsplash.jpg'></Image> */}
        <Stack width={'49.60%'} >
          <Banner1 />
        </Stack>
      </HStack>
    </>
  );
};

export default page;
