import React from 'react';
import styles from './card.module.css'
import logo from '../../../Images/kids-bird.2de19361.png'
import { Card, CardHeader, CardBody, CardFooter, Flex } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import Button from '../../Button/button'

const card = () => {
    return (
        <>
            <Card maxW='md' className={styles.card}>
                <CardHeader>
                    <Flex spacing='4'>
                        <div className={styles.card_header}>
                            <img src={logo} className={styles.card_header_logo} />
                            <div className={styles.card_header_content}>Complete</div>
                        </div>
                    </Flex>
                </CardHeader>
                <CardBody>
                    <div className={styles.card_body}>
                        <span>Full access to all of Cambly</span>
                        <span><CheckIcon />  Our most comprehensive experience</span>
                        <span><CheckIcon />  Practice 1:1 or in a group</span>
                        <span><CheckIcon />  Schedule ahead or on demand</span>
                    </div>
                </CardBody>
                <CardFooter className={styles.card_footer}>
                    <div className={styles.card_footer_section}>
                        <div className={styles.card_footer_section_first}>
                            <div>Starting from</div>
                            <div className={styles.card_footer_section_price}>
                                <div className={styles.card_footer_section_price_number}>$1200</div>
                                <div>/month</div>
                            </div>
                        </div>
                        <Button></Button>
                    </div>
                </CardFooter>
            </Card>
        </>
    );
}

export default card;
