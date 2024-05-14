import React,{ useEffect,useState } from "react";
import { useSwiper } from "swiper/react";
import { ReactComponent as rightNav } from "../../../assets/rightNav.svg";
import styles from "../Carousel.module.css";

export default function CarouselRightNavigation(){
    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(swiper.isEnd);

    useEffect(() => {
        swiper.on("slideChange",function(){
            setIsEnd(swiper.isEnd);
        });
    },[]);

    return(
        <div className={styles.righttNavigation}>
            {!isEnd && <rightNav onClick={() => swiper.slideNext()}/>}
        </div>
    );
}