import React from 'react';
import styles from './card2.module.css'
import logo from '../../../Images/kids-bird.2de19361.png'
import { Card, CardHeader, CardBody, CardFooter, Flex } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import Button from '../../Button/button'

const card2 = () => {
    return (
        <>
            <Card maxW='md' className={styles.card}>
                <CardHeader>
                    <Flex spacing='2'>
                        <div className={styles.card_header}>
                            <img src='https://staticimagescdn.cambly.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshoji_image.03f54480.png&w=256&q=75' className={styles.card_header_logo} />
                        </div>
                    </Flex>
                </CardHeader>
                <CardBody>
                    <div className={styles.card_body}>
                        <span>"What I like about Cambly is that all the tutors are native English
                             speakers and their high teaching quality.
                             My English has improved a lot and I am having fun studying it!"</span>
                    </div>
                </CardBody>
                <CardFooter className={styles.card_footer}>
                    <div className={styles.card_footer_section}>
                        <div>
                            <div style={{fontWeight: 900}}>Shoji</div>
                            <div>Japan</div>
                        </div>
                    </div>
                </CardFooter>
            </Card>
        </>
    );
}

export default card2;
