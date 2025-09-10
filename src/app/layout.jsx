import { GoogleAnalytics } from '@next/third-parties/google'
import { DM_Sans } from "next/font/google";
import "./globals.css";


const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
})


export default function RootLayout({children})
 {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-KSMHPWWEVS" />

      <body className={`${dmSans.variable}`}>
         
        {children}
      </body>
    </html>
  );
}
