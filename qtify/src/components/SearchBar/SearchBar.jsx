import React from "react";
import styles from "./SearchBar.module.css";
import {ReactComponent as SearchIcon} from "../../assets/SearchIcon.svg";

export default function SearchBar(){
  return (<div>
     <div className={styles.container}>
     <input
       name="search"
       className={styles.search}
       placeholder="Search a album of your choice"
     /> <div>
      <button className={styles.searchButton} type='submit'>
        <SearchIcon/>
      </button>
      </div>
     </div>
     </div>
      );
}
