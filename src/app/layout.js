import Navigation from "@/components/Navigation";
import "./globals.css";
import localFont from "next/font/local";
import DarkVeil from "@/components/DarkVeil";

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
        {/* Full-screen background layer */}
        <div className="fixed inset-0 z-0">
          <DarkVeil className="w-full h-full" />
        </div>

        {/* Your actual site content above */}
        <div className="relative z-10 min-h-screen">
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}