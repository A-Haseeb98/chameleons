import { Fragment } from 'react'
import { Grid } from '@mui/material'
// import Image from 'next/image';
import styles from './FeaturesReload.module.scss'

const FeatureReloadCard = ({ feature }) => {
    return (
        <div className={styles._card}>
            <div className={styles._image}>
                {/* <Image
                    src={feature.photoUrl}
                    width={50}
                    height={50}
                    alt="chameleon"
                    objectFit="contain"
                    loading="lazy"
                /> */}
                <img
                    src={feature.photoUrl}
                    height={50}
                    width={50}
                    alt="chameleon"
                    objectFit="contain"
                    loading="lazy" />
            </div>

            <div className={styles._details}>
                <p><span className={styles._heading}>{feature.title}:</span> {feature.details}</p>
            </div>
        </div>
    )
}

export default FeatureReloadCard
