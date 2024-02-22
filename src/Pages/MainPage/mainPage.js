import React from 'react';
import styles from './mainPage.module.css'
import PlanCard from '../../Components/Card/card'
import Button from '../../Components/Button/button'

const MainPage = () => {
    return (
        <>
            <div className={styles.section1}>
                <div className={styles.section1_left}>
                    <div className={styles.section1_span}><span>Online English classes with native speakers</span></div>
                    <div><button className={styles.section1_left_btn}>Take your first lesson for $39</button></div>
                </div>
                <div>
                    <img src='https://static.cambly.com/_next/static/media/guy_on_globe.1786b9db.svg'/>
                </div>
            </div>
            <div className={styles.section2}>
                <div><span className={styles.section2_header_content}>Pick the plan that works for you</span></div>
                <div className={styles.section2_cards}>
                   <PlanCard></PlanCard>
                   <PlanCard></PlanCard>
                   <PlanCard></PlanCard>
                </div>
            </div>
            <div className={styles.section3}>
                <div>
                    <img src='https://staticimagescdn.cambly.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpaid_trial_banner_img.547edfb4.png&w=384&q=75'/>
                </div>
                <div>
                    <div className={styles.section3_content_span1}>Talk with a tutor for just 39 TL</div>
                    <div>Get a taste of Cambly with a 30-minute trial lesson.</div>
                </div>
                <div>
                    <Button></Button>
                </div>
            </div>
        </>
    );
}

export default MainPage;
