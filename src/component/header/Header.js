import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header_left}>
        <img
          width={65}
          height={65}
          src={process.env.PUBLIC_URL + "/assets/POOJA-BISHT-2.png"} // logo path
          alt="Logo"
        />
      </div>
    </header>
  );
};

export default Header;
