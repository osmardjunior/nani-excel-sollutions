import styles from "./Thanks.module.scss";

import Header from "./Composer/Header/Header";
import Main from "./Composer/Main/Main";
import Footer from "./Composer/Footer/Footer";
import { useEffect } from "react";

function Thanks() {
  useEffect(() =>{
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default Thanks;
