import Appbar from "./components/Appbar";
import Providers from "./components/Providers";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Providers>
          <Appbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}


