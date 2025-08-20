import Navigation from "@/components/Navigation";
import "./globals.css";
import localFont from "next/font/local";

const qurova = localFont({
  src: [
    {
      path: "../../public/fonts/QurovaDEMO-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/QurovaDEMO-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/QurovaDEMO-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/QurovaDEMO-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/QurovaDEMO-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "Ephicode",
  description: "Simply solution to your designing, development, marketing and coding.",
  icons: {
    icon: "/logo.png",}
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={qurova.className}>
      <body className="antialiased">
        <Navigation />
        {children}
      </body>
    </html>
  );
}