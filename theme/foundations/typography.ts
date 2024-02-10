import localFont from "next/font/local";

export const pockota = localFont({
  src: [
    {
      path: "../../assets/fonts/Pockota-Light.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Pockota-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Pockota-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Pockota-Bold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Pockota-ExtraBold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});
export const montserrat = localFont({
  src: [
    {
      path: "../../assets/fonts/Montserrat-Regular.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Montserrat-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Montserrat-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Montserrat-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Montserrat-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const typography = {
  heading: `${pockota.style.fontFamily} ,${montserrat.style.fontFamily}`,
  body: `${pockota.style.fontFamily} ,${montserrat.style.fontFamily}`,
};
