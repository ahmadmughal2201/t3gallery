import "~/styles/globals.css";
import "@uploadthing/react/styles.css";
import {
  ClerkProvider,
} from '@clerk/nextjs'

import { GeistSans } from "geist/font/sans";
import TopNavBar from "./_components/topnav";

export const metadata = {
  title: "T3 Gallery",
  description: "Manage your memmories",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};



export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal:React.ReactNode;
}) {
  return (
    <ClerkProvider>

      <html lang="en" className={`${GeistSans.variable} bg-gradient-to-b  from-[#15162c] to-[#110620]`}>
        <body>
          <TopNavBar/>
          {children}
          {modal}
          <div id="modal-root"/>
        </body>
      </html>
    </ClerkProvider>

  );
}
