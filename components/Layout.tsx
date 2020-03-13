import * as React from "react";
import Header from "./Header";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="m-5 p-5 max-w-screen-xl mx-auto">
    <Header />
    {children}
  </div>
);

export default Layout;
