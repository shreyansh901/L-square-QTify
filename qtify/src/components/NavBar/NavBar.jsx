import React from "react";
import styles from "./NavBar.module.css";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar.jsx"; 
import Button from "../Button/Button"; 

function Navbar(){
  return (<nav className={styles.Navbar}>
  <Logo/>
  <SearchBar/>
  <Button/>
  </nav>
  );
}

export default Navbar;