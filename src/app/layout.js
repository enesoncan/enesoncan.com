import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: "Enes Öncan",
  description: "Merhaba, ben Enes Öncan. İstanbul'da yaşamaktayım. BluTV şirketinde Yazılım Geliştirici olarak çalışmaktayım. Front-End dünyası ilgi ve uzmanlık alanım olmakla beraber; Html, CSS, JavaScript ve ReactJs teknolojilerini kullanmaktayım.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={quicksand.className}>{children}</body>
    </html>
  );
}
