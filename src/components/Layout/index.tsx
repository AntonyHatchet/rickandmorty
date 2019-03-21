import * as React from "react";
import { ReactNode } from "react";
import "./_normalize.scss";
import "./_defaults.scss";
import Footer from "../Footer";
import Header from "../Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
