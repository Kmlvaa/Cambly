import React from 'react';
import styles from './layout.module.css'
import parrot from '../../Images/kids-bird.2de19361.png'
import insta from '../../Images/insta.webp'
import facebook from '../../Images/facebook.png'
import twitter from '../../Images/Logo_of_Twitter.svg.png'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
} from '@chakra-ui/react'
import { Outlet, Link } from "react-router-dom";
import { ChevronDownIcon } from '@chakra-ui/icons'

const HeaderLayout = () => {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.left_header}>
                    <div className={styles.logo}>
                        <img src={parrot} width={40} height={40} className={styles.logo_img}></img>
                        <div className={styles.logo_name}>Nego</div>
                    </div>
                    <div className={styles.left_header_links}>
                        <div><Link to='/community'>Tutors</Link></div>
                        <div><Link to='/courses'>Courses</Link></div>
                        <div><Link to='/quizzes'>Quizzes</Link></div>
                        <div><Link to='/lessons'>Lessons</Link></div>
                    </div>
                </div>
                <div className={styles.right_header}>
                    <div>
                        <Menu>
                            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                                Actions
                            </MenuButton>
                            <MenuList>
                                <MenuItem>Download</MenuItem>
                                <MenuItem>Create a Copy</MenuItem>
                                <MenuItem>Mark as Draft</MenuItem>
                                <MenuItem>Delete</MenuItem>
                                <MenuItem>Attend a Workshop</MenuItem>
                            </MenuList>
                        </Menu>
                    </div>
                    <button className={styles.right_header_btn1}>Log in</button>
                    <button className={styles.right_header_btn2}>Sign up</button>
                </div>
            </div>
            <Outlet />
            <div className={styles.footer1}>
                <div>PRIVACY POLICY TERMS AND CONDITIONS JOBS CONTACT PRESS</div>
                <div className={styles.footer1_logos}>
                    <img src={insta} />
                    <img src={facebook} />
                    <img src={twitter} />
                </div>
                <div>CAMBLY INC. © COPYRIGHT 2024. ALL RIGHTS RESERVED.</div>
            </div>
        </>
    );
}

export default HeaderLayout;
