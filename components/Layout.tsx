import * as React from "react";
import Nav from "./Nav";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="m-5 p-5 max-w-screen-xl mx-auto">
    <Nav />
    {children}
  </div>
);

export default Layout;
