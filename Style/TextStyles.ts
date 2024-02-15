import { pockota, montserrat } from "../theme/foundations/typography";

const commonTextStyle = {
  fontFamily: pockota.style.fontFamily,
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "110%",
};

const secondaryTextStyle = {
  ...commonTextStyle,
  fontFamily: montserrat.style.fontFamily,
};

export const textStyles = {
  primary: {
    h1: {
      ...commonTextStyle,
      fontSize: ["54px", "56px", "58px", "60px", "64px", "66px"],
      lineHeight: "110%",
      letterSpacing: "-0.64px",
    },
    h2: {
      ...commonTextStyle,
      fontSize: "40px",
      lineHeight: "140%",
      letterSpacing: "-0.4px",
    },
    h3: {
      ...commonTextStyle,
      fontSize: { sm: "24px", lg: "32px" },
      fontWeight: "500",
      lineHeight: "125%",
      letterSpacing: "-0.32px",
    },
    h4: {
      ...commonTextStyle,
      fontSize: "24px",
      fontWeight: 500,
      lineHeight: "150%",
      letterSpacing: "-0.24px",
    },
    bodyXlM: {
      ...commonTextStyle,
      fontSize: "20px",
      lineHeight: "150%",
      letterSpacing: "-0.24px",
    },
    bodyXlR: {
      ...commonTextStyle,
      fontSize: "20px",
      fontWeight: "500",
      lineHeight: "160%",
    },
    bodyLM: {
      ...commonTextStyle,
      fontSize: { sm: "16px", lg: "18px" },
      fontWeight: "600",
      lineHeight: "150%",
      letterSpacing: "-0.24px",
    },
    bodyLR: {
      ...commonTextStyle,
      fontSize: { sm: "16px", lg: "18px" },
      fontWeight: "500",
      lineHeight: "160%",
    },
    bodyMM: {
      ...commonTextStyle,
      fontSize: { sm: "14px", lg: "16px" },
      lineHeight: "160%",
    },
    bodyMR: {
      ...commonTextStyle,
      fontSize: { sm: "14px", lg: "24px" },
      fontWeight: "600",
      lineHeight: "160%",
    },
    bodySM: {
      ...commonTextStyle,
      fontSize: { sm: "12px", lg: "14px" },
      lineHeight: "160%",
    },
    bodySR: {
      ...commonTextStyle,
      fontSize: { sm: "12px", lg: "14px" },
      fontWeight: "500",
      lineHeight: "160%",
    },
    bodyXsM: {
      ...commonTextStyle,
      fontSize: "14px",
      lineHeight: "160%",
    },
    bodyXsR: {
      ...commonTextStyle,
      fontSize: "12px",
      fontWeight: "500",
      lineHeight: "160%",
    },
  },
  secondary: {
    h1: {
      ...secondaryTextStyle,
      fontSize: ["54px", "56px", "58px", "60px", "64px", "66px"],
      lineHeight: "110%",
      letterSpacing: "-0.64px",
    },
    h2: {
      ...secondaryTextStyle,
      fontSize: ["30px", "32px", "34px", "36px", "38px", "40px", "42px"],
      lineHeight: "140%",
      letterSpacing: "-0.4px",
    },
    h3: {
      ...secondaryTextStyle,
      fontSize: ["22px", "24px", "26px", "28px", "30px", "32px", "34px"],
      lineHeight: "125%",
      letterSpacing: "-0.32px",
    },
    h4: {
      ...secondaryTextStyle,
      fontSize: "24px",
      lineHeight: "150%",
      letterSpacing: "-0.24px",
    },
    bodyXlM: {
      ...secondaryTextStyle,
      fontSize: { sm: "16px", lg: "20px" },
      lineHeight: "150%",
      letterSpacing: "-0.24px",
    },
    bodyXlR: {
      ...secondaryTextStyle,
      fontSize: { sm: "16px", lg: "20px" },
      fontWeight: "500",
      lineHeight: "160%",
    },
    bodyLM: {
      ...secondaryTextStyle,
      fontSize: "16px",
      lineHeight: "150%",
      letterSpacing: "-0.24px",
    },
    bodyLR: {
      ...secondaryTextStyle,
      fontSize: "18px",
      fontWeight: "500",
      lineHeight: "160%",
    },
    bodyMM: {
      ...secondaryTextStyle,
      fontSize: { sm: "14px", lg: "16px" },
      lineHeight: "160%",
    },
    bodyMR: {
      ...secondaryTextStyle,
      fontSize: { sm: "12px", lg: "14px !important" },
      fontWeight: "600",
      lineHeight: "145%",
      letterSpacing: "0.021px",
    },
    bodySM: {
      ...secondaryTextStyle,
      fontSize: { sm: "12px", lg: "14px" },
      lineHeight: "145%",
    },
    bodySR: {
      ...secondaryTextStyle,
      fontSize: { sm: "12px", lg: "14px" },
      fontWeight: "500",
      lineHeight: "145%",
    },
    bodyXsM: {
      ...secondaryTextStyle,
      fontSize: { sm: "10px", lg: "12px" },
      lineHeight: "160%",
      fontWeight: "600",
    },
    bodyXsR: {
      ...secondaryTextStyle,
      fontSize: { sm: "10px", lg: "12px" },
      fontWeight: "500",
      lineHeight: "100%",
      letterSpacing: "0.055px",
    },
    bodyXxsM: {
      ...secondaryTextStyle,
      fontSize: "10px",
      fontWeight: "600",
      lineHeight: "135%",
    },
    bodyXxsR: {
      ...secondaryTextStyle,
      fontSize: "10px",
      fontWeight: "500",
      lineHeight: "160%",
    },
    bodyXvsM: {
      ...secondaryTextStyle,
      fontSize: "8px",
      fontWeight: "600",
      lineHeight: "100%",
    },
    bodyXvsR: {
      ...secondaryTextStyle,
      fontSize: "8px",
      fontWeight: "400",
      lineHeight: "100%",
    },
  },
};
