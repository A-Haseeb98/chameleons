import styles from './Types.module.scss'
import { Container,  Grid } from '@mui/material'
// import Image from 'next/image'
import {Fragment} from 'react';

import { types } from '../../Data/types';

const Types = () => {

    return (
        <div className="custom_container">
            <Container>
                <Grid
                    container
                    spacing={1}
                    justifyContent="center"
                    alignItems="center"
                    className={styles.types}
                >

                   <Grid item md={3} sm={4} xs={12} className={styles._left_side_image}></Grid>
                    <Grid item md={9} sm={8} xs={12}>
                        <div className={styles._title}>
                            <p>There are three different types of chameleons in our collection! These designs are based on real chameleons and their rarity on Earth!</p>
                        </div>
                    </Grid>
                {
                    types.map(item => {
                        return (
                            <Fragment key={item.id}>
                                <Grid item md={3} sm={4} xs={12} className={styles._left_side_image}>
                                    <img
                                        src={item.imageUrl}
                                        width={200}
                                        height={200}
                                        alt={item.title}
                                        objectFit="contain"
                                        loading="lazy"
                                        className={styles._image}
                                    />
                                </Grid>

                                <Grid
                                    item
                                    md={9}
                                    sm={8}
                                    xs={12}
                                >
                                    <div className={styles._details}>
                                        <h3>* {item.title}: <span className={styles._description}>{item.description}</span></h3>
                                    </div>
                                </Grid>
                            </Fragment>
                        )
                    })
                }
                </Grid>
            </Container>
        </div>
    )
}

export default Types
