import styles from './SneakPeek.module.scss'
import {  Grid } from '@mui/material'
import Button from '../../global/Button/Button'
import useMediaQuery from '@mui/material/useMediaQuery';
import img from '../../assets/charmeleon.jfif'

const SneakPeek = () => {

    const matches = useMediaQuery('(max-width:1024px)');

    return (
        <div className="custom_container">
            <Grid
                container
                spacing={1}
                justifyContent="center"
                alignItems="center"
                alignContent="center"
                className={styles.sneak_peek}
            >
                <Grid item md={matches ? 8 : 5} sm={7} xs={12}>
                    <h2 className={styles._title}>
                        A Sneak Peek of 10k Avatars!
                    </h2>
                    <div className={styles._details}>
                        <p>
                            This is a prototype of our second collection of 10,000 unique chameleon avatars which will be launched on 24th March for presale! We will sell this collection for a fee.
                        </p>
                        <p>
                            Holders of our free 8-bit chameleons will be automatically whitelisted for this second collection!
                        </p>
                        <div className={styles._button_web}>
                            <Button>Get Whitelisted</Button>
                        </div>
                    </div>
                </Grid>

                <Grid
                    item
                    md={matches ? 4 : 4}
                    sm={5}
                    xs={12}
                    className={styles._right_side_image}
                >
                    <img
                        src={img}
                        // width={400}
                        // height={500}
                        alt="horus1"
                        objectFit="contain"
                        loading="lazy"
                        className={styles._image}
                    />
                    <div className={styles._button_mob}>
                        <Button>Get Whitelisted</Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default SneakPeek
