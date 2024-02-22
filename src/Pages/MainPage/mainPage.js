import React from 'react';
import styles from './mainPage.module.css'
import PlanCard from '../../Components/Card/Card1/card'
import Card2 from '../../Components/Card/Card2/card2'
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
                <div className={styles.section2_upper}>
                    <div className={styles.section2_upper_cards}>
                        <div>
                            <img src='https://staticimagescdn.cambly.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthumbnail_whitney.bdd2260b.webp&w=3840&q=75'/>
                        </div>
                        <div className={styles.section2_upper_content}>
                            <div className={styles.section2_upper_name}>
                                <span className={styles.section2_upper_name_span1}>Whitney</span>
                                <span>Australia</span>
                            </div>
                            <div>Star</div>
                        </div>
                    </div>
                    <div className={styles.section2_upper_cards}>
                        <div>
                            <img src='https://staticimagescdn.cambly.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthumbnail_nikola.f57c244a.webp&w=1920&q=75' />
                        </div>
                        <div className={styles.section2_upper_content}>
                            <div className={styles.section2_upper_name}>
                                <span className={styles.section2_upper_name_span1}>Nikola</span>
                                <span>United States</span>
                            </div>
                            <div>Star</div>
                        </div>
                    </div>
                    <div className={styles.section2_upper_cards}>
                        <div>
                            <img src="https://staticimagescdn.cambly.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthumbnail_alana.556c689f.webp&w=3840&q=75"/>
                        </div>
                        <div className={styles.section2_upper_content}>
                            <div className={styles.section2_upper_name}>
                                <span className={styles.section2_upper_name_span1}>Alana</span>
                                <span>United States</span>
                            </div>
                            <div>Star</div>
                        </div>
                    </div>
                    <div className={styles.section2_upper_cards}>
                        <div>
                            <img src="https://staticimagescdn.cambly.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthumbnail_joshua.62834fb1.webp&w=1920&q=75"/>
                        </div>
                        <div className={styles.section2_upper_content}>
                            <div className={styles.section2_upper_name}>
                                <span className={styles.section2_upper_name_span1}>Joshua</span>
                                <span>United States</span>
                            </div>
                            <div>Star</div>
                        </div>
                    </div>
                </div>
                <div className={styles.section2_lower}>
                    <span className={styles.section2_lower_header}>Choose your own tutor</span>
                    <span>Choose the tutor that has the personality, professional experience, or focus area you need!</span>
                    <Button></Button>
                </div>
            </div>
            <div className={styles.section3}>
                <div><span className={styles.section3_header_content}>Pick the plan that works for you</span></div>
                <div className={styles.section3_cards}>
                   <PlanCard></PlanCard>
                   <PlanCard></PlanCard>
                   <PlanCard></PlanCard>
                </div>
            </div>
            <div className={styles.section4}>
                <div>
                    <img src='https://staticimagescdn.cambly.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpaid_trial_banner_img.547edfb4.png&w=384&q=75'/>
                </div>
                <div>
                    <div className={styles.section4_content_span1}>Talk with a tutor for just 39 TL</div>
                    <div>Get a taste of Cambly with a 30-minute trial lesson.</div>
                </div>
                <div>
                    <Button></Button>
                </div>
            </div>
            <div className={styles.section5}>
                <div className={styles.section5_left}>
                    <div>
                        <h1>Try our free resources</h1>
                        <span>Get a taste of Cambly with our most popular tools and guides. No subscription required.</span>
                    </div>
                    <div>
                        <Button></Button>
                    </div>
                </div>
                <div>
                    <img className={styles.section5_right_img} src="https://staticimagescdn.cambly.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftry_cambly.3d7c8d26.png&w=750&q=75"/>
                </div>
            </div>
            <div className={styles.section6}>
                <div className={styles.section6_upper}>
                    <Card2></Card2>
                    <Card2></Card2>
                    <Card2></Card2>
                </div>
                <div className={styles.section6_lower}>
                    <div className={styles.section6_lower_header}>Achieve your goals by learning English with Cambly</div>
                    <Button></Button>
                </div>
            </div>
        </>
    );
}

export default MainPage;
