import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  variable: "--font-quicksand-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Enes Öncan | Front-End Developer",
  description:
    "Enes Öncan – Front-End Developer in Istanbul, working at []. Skilled in HTML, CSS, JavaScript,z React.js and Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${quicksand.variable}`}>{children}</body>
    </html>
  );
}
