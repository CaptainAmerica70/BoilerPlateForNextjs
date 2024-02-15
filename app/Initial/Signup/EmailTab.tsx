"use client";
import InputPage from "@/components/InputField/page";
import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { formSchema } from "../../../Schema/formSchema";
import { Form, Formik } from "formik";
import BoxComponent from "@/components/Box/page";
import ButtonComponent from "@/components/Button/page";

// Importing SVG as a string URL
import Apple from "../../../svg/apple.svg";
import Google from "../../../svg/google.svg";
import Twitter from "../../../svg/twitter.svg";
import Link from "@/components/Link/page";
import AccordionComponent from "@/components/Accordion/Page";
const EmailTab = () => {
  const link = [
    { icon: Google, href: "/" },
    { icon: Apple, href: "/" },
    { icon: Twitter, href: "/" },
  ];
  return (
    <>
      <BoxComponent>
        <Formik
          initialValues={{ email: "", name: "", password: "", Referral: "" }}
          validationSchema={formSchema}
          onSubmit={(values, actions) => {
            console.log(values);
            actions.setSubmitting(true);
          }}
        >
          {(formik) => (
            <Form onSubmit={formik.handleSubmit}>
              <Text
                textStyle={"secondary.bodyMR"}
                textColor={"main.500"}
                my={"10px"}
              >
                Name
              </Text>
              <InputPage
                width="464px"
                height="50px"
                placeholder="Enter your Name"
                schema="formSchema"
                label="name"
                type="name"
                name="name"
                borderColor={"Neutral.400"}
              ></InputPage>
              <Text
                textStyle={"secondary.bodyMR"}
                textColor={"main.500"}
                my={"10px"}
              >
                Email
              </Text>
              <InputPage
                width="464px"
                height="50px"
                placeholder="Enter your Email"
                schema="formSchema"
                label="email"
                type="email"
                name="email"
                borderColor={"Neutral.400"}
              ></InputPage>
              <Text
                textStyle={"secondary.bodyMR"}
                textColor={"main.500"}
                my={"10px"}
              >
                password
              </Text>
              <InputPage
                width="464px"
                height="50px"
                placeholder="Enter your password"
                schema="formSchema"
                label="password"
                type="password"
                name="password"
                borderColor={"Neutral.400"}
              ></InputPage>
              <AccordionComponent
                title={"Have a referral code? (optional)"}
                data={
                  <InputPage
                    width="464px"
                    height="50px"
                    placeholder="Enter Referral Code"
                    schema="formSchema"
                    label="Referral"
                    type="Referral"
                    name="Referral"
                    borderColor={"Neutral.400"}
                  ></InputPage>
                }
              />

              <Text textColor={"black"} my={"10px"}></Text>
              <Text textStyle={"secondary.BodyXS"} textColor={"#9C9CAB"}>
                By creating an account, you agree to our
                <Link href="/" as={"span"} textColor={"#118E52"}>
                  Terms and Conditions
                </Link>
              </Text>
              <Link href="/DashBoard">
                {" "}
                <ButtonComponent
                  onClick={() => { }}
                  textStyle={"bodyLM"}
                  variant={"outline"}
                  color="main.300"
                  borderColor="main.300"
                  my={"10px"}
                >
                  Next
                </ButtonComponent>
              </Link>
              <Text textStyle={"secondary.bodyXsR"} className="text-center">
                or continue with
              </Text>
              <HStack gap={"12px"} className="flex justify-center py-4">
                {link.map((item, index) => (
                  <Link key={index} href={item.href}>
                    <ButtonComponent
                      onClick={() => {
                        // call function or handle click
                      }}
                      variant="outline1"
                      color="Neutral.150"
                      borderColor="Neutral.400"
                      icon={item.icon}
                    />
                  </Link>
                ))}
              </HStack>
            </Form>
          )}
        </Formik>
      </BoxComponent>
    </>
  );
};

export default EmailTab;
