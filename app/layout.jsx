import { Inter, Dela_Gothic_One, Montserrat } from "next/font/google";
//import dela gothic one font

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const dela_gothic_one = Dela_Gothic_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "S-Cube Center | Universitas Mataram",
  description: "S-Cube Center | Universitas Mataram",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${dela_gothic_one.variable}`}>
        {children}
      </body>
    </html>
  );
}
