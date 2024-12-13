import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <main style={{ minHeight: "80vh", padding: "2rem" }}>
        <p>Demo</p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
