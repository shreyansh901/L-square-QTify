import React,{ useEffect,useState } from "react";
import { useSwiper } from "swiper/react";
import { ReactComponent as leftNav } from "../../../assets/leftNav.svg";
import styles from "../Carousel.module.css";

export default function CarousellefttNavigation(){
    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

    useEffect(() => {
        swiper.on("slideChange",function(){
            setIsBeginning(swiper.isBeginning);
        });
    },[]);

    return(
        <div className={styles.righttNavigation}>
            {!isBeginning && <lefttNav onClick={() => swiper.slidePrev()}/>}
        </div>
    );
}