import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={{ minHeight: "80vh", padding: "2rem" }}>{children}</main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
