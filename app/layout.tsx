import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import LanguageSwitch from "@/components/language-switch";
import { I18nProvider } from "@/context/i18n-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Amir Mehmood | Portfolio",
  description:
    "Amir Mehmood is a Senior Software Engineer skilled in Node.js, Nest.js, React, Next.js, dedicated to delivering high-quality digital experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-300 text-gray-950 relative pt-28 sm:pt-0 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-1rem] -z-10 right-[2rem] h-[50vh] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#905263] 2xl:right-[22rem] 2xl:blur-[20rem] 2xl:top-[-4rem]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[50vh] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[10rem] dark:bg-[#676394] 2xl:blur-[16rem]"></div>
        <ThemeContextProvider>
          <I18nProvider>
            <ActiveSectionContextProvider>
              <Header />
              {children}
              <Toaster position="top-right" />
              <ThemeSwitch />
              {/* <LanguageSwitch /> */}
              <Footer />
            </ActiveSectionContextProvider>
          </I18nProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
