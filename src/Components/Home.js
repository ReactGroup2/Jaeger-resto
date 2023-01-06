import { findByLabelText } from "@testing-library/react";
import React from "react";
import { MenuContext, MenuProvider } from "./data/MenuContext";
import Header from "./Header/Header";
import MenuContainer from "./Menu/MenuContainer";

const Home = () => {
  return (
    <div>
      <MenuProvider>
        <Header />
        <MenuContainer />
      </MenuProvider>
    </div>
  );
};

export default Home;
