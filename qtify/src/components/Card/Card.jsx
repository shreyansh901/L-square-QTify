import React from "react";
import { Chip, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

function Card({ data, type }) {
    const getCard = (type) => {
        switch (type) {
            case "album": {
                const { image, follows, title, slug, songs } = data;
                return(
                    <Tooltip title={`${songs.length}songs`} placement="top" arrow>
                    <Link to={`/albums/${slug}`}>
                        <div className={styles.wrapper}>
                         <div className={styles.card}>
                           <img src={image} alt="albums" loading="lazy" />
                             <div className={styles.banner}>
                                <Chip
                                  label={`${follows}Follows`}
                                  size="small"
                                  className={styles.chip}
                                  />
                             </div> 
                         </div> 
                         <div className={styles.titleWrapper}>
                            <p>{title}</p>
                         </div>   
                        </div>
                    </Link>   
                    </Tooltip> 
                );
            }
            case "song": {
                const { image, likes, title } =data;
                return(
                    <div className={styles.wrapper}>
                     <div className={styles.card}>
                        <img src={image} alt="songs" loading="lazy"/>
                        <div className={styles.banner}>
                         <div className={styles.pill}>
                           <p>{likes} Likes</p>
                         </div>
                        </div>
                     </div>
                          <div className={styles.titleWrapper}>
                            <p>{title}</p>
                          </div>
                    </div>    
                
                );
            } 
            default:
               return <></>
        }
    };
    return getCard(type);
}

export default Card;