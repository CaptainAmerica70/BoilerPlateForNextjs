"use client";
import InputPage from "@/components/InputField/page";
import { Image, Text } from "@chakra-ui/react";
import React from "react";
import { formSchema } from "../../../Schema/formSchema";
import { Form, Formik } from "formik";
import BoxComponent from "@/components/Box/page";
import ButtonComponent from "@/components/Button/page";
// Importing SVG as a string URL
import { ReactComponent as AppleIcon } from '../../../assets/svg/apple.svg';
const EmailTab = () => {
  return (
    <>
      <BoxComponent>
        <Formik
          initialValues={{ email: "", name: "", password: "" }}
          validationSchema={formSchema}
          onSubmit={(values, actions) => {
            console.log(values);
            actions.setSubmitting(true);
          }}
        >
          {(formik) => (
            <Form onSubmit={formik.handleSubmit}>
              <Text textStyle={"bodyMM"} textColor={"main.500"}>
                {" "}
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
              <Text textStyle={"bodyMM"} textColor={"main.500"}>
                {" "}
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
              <Text textStyle={"bodyMM"} textColor={"main.500"}>
                {" "}
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
              <Text textStyle={"bodyMM"} textColor={"black"}>
                Have a referral code? (optional)
              </Text>
              <Text textStyle={"bodySM"} textColor={"#9C9CAB"}>
                By creating an account, you agree to our{" "}
                <Text as={"span"} textColor={"#118E52"}>
                  Terms and Conditions
                </Text>
              </Text>
              <ButtonComponent
                onClick={() => { }}
                textStyle={"bodyLM"}
                variant={"outline"}
                color="main.300"
                borderColor="main.300"
              >
                next
              </ButtonComponent>
              <Text>or continue with</Text>
              <ButtonComponent
                onClick={() => { }}
                variant={"outline1"}
                color="Neutral.150"
                borderColor="Neutral.400"
                icon={AppleIcon}
              >

              </ButtonComponent>
            </Form>
          )}
        </Formik>
      </BoxComponent>
    </>
  );
};

export default EmailTab;
