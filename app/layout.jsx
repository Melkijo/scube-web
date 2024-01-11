//import dela gothic one font
import { montserrat, delaGothicOne } from "./fonts";
import "./globals.css";

export const metadata = {
  title: "S-Cube Center | Universitas Mataram",
  description: "S-Cube Center | Universitas Mataram",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${delaGothicOne.variable}`}>
        {children}
      </body>
    </html>
  );
}
