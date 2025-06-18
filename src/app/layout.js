import Header from "@/Components/common/Header";
import "../../public/css/global.scss";
import Footer from "@/Components/common/Footer";



export const metadata = {
  title: "protfolio | beihrazi",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
