import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import About from "../components/About";
import Title from "../components/Title";
import Work from "../components/Work";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>creat next app</title>
      </Head>

      <body>
        <div
          className="w-screen h-screen bg-no-repeat bg-cover bg-left bg-fixed "
          style={{ backgroundImage: "url('/anarticta 1.jpg')" }}
        >
          <Title />
          <About />
          <Work />
        </div>



      </body>
    </div>
  );
};

export default Home;
