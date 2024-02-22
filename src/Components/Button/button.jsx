import React from 'react';
import styles from './button.module.css'
import { Button } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

const button = () => {
    return (
        <>
            <div className={styles.btnn}>
                <Button className={styles.btn}>Sign up  <ArrowForwardIcon /></Button>
            </div>
        </>
    );
}

export default button;
