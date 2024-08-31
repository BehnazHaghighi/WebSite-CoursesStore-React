import { Children } from "react";
import Footer from "./Footer";
import Header from "./Header";
import AutProvider from "../AutProvider";

function Layout({ children }) {
  return (
    <>
      <AutProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </AutProvider>
    </>
  );
}
export default Layout;
