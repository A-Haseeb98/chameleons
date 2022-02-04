import styles from './FeaturesReload.module.scss';
import { Container, Grid } from '@mui/material'
import { Fragment } from 'react'
import FeatureReloadCard from './FeatureReloadCard';

import {features} from '../../Data/features'

const FeaturesReload = () => {
    return (
        <div className="custom_container">
            <Container>
                <Grid
                    container
                    spacing={1}
                    className={styles.features}
                    >
                        {
                            features.map(feature => {
                                return (
                                    <Grid key={feature.id} md={12} xl={12} xs={12} sm={12} className={styles.feature_card}>
                                        <FeatureReloadCard feature={feature} />
                                    </Grid>
                                )
                            })
                        }
                </Grid>
            </Container>
        </div>
    )
}

export default FeaturesReload
