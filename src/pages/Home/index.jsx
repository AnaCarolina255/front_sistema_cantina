import React from "react";
import { useRef } from "react";
import Categoria from "../../components/common/Categoria";
import Banner from "../../components/Home/Banner";
import Lista from "../CadProd/ListaProdutos";

const Home = () => {
  const menuRef = useRef();

  const handleScrollMenu = () =>
    menuRef.current.scrollIntoView({ behavior: "smooth" });
  return (
    <div>
      <Banner handleScrollMenu={handleScrollMenu} />
      <Categoria />
      <Lista />
    </div>
  );
};

export default Home;
