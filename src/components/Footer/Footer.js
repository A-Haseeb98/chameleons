// import Image from "next/image";
import {
  RiInstagramFill,
  RiTwitterFill,
  RiFacebookCircleFill,
  RiShip2Fill,
} from "react-icons/ri";
import { SiDiscord } from "react-icons/si";
import styles from "./Footer.module.scss";
import { Grid, Typography } from "@mui/material";
import LOGO from '../../assets/logo.png'
const Footer = () => {
  return (
    <section className={styles.footer}>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        className={styles._spacing}
      >
        <Grid item xs={12} md={3} className={styles._logo}>
          <img src={LOGO} height={100} width={200} alt="logo" />
        </Grid>
        <Grid item xs={12} md={6}>
          {/* <Typography
            variant="subtitle1"
            align="center"
            style={{ fontWeight: "bold", padding: "0 3px" }}
          >
            &copy; {new Date().getFullYear()} Charming Chameleons and Cricket Bank. All rights
            reserved.
          </Typography> */}
          <Typography
            variant="subtitle2"
            align="center"
            style={{ padding: "0 3px" }}
          >
            &copy; {new Date().getFullYear()} Cauligenous Chameleons and Cricket Bank are trademarks of Waynestark Enterprises Limited; Registered in England. Company number: 13558188. Registered Address: 21D Heathmans Road, Fulham, London, SW6 4TJ, England. All rights reserved.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className={styles._social_links}>
          <a href="https://opensea.io/collection/cauligenouschameleons8bit" target="_blank" rel="noopener noreferrer">
            <RiShip2Fill className={styles._social_icon} />
          </a>
          <a href="https://www.instagram.com/cauligenouschameleons/" target="_blank" rel="noopener noreferrer">
            <RiInstagramFill className={styles._social_icon} />
          </a>
          {/* <a href="#" target="_blank" rel="noopener noreferrer">
            <RiFacebookCircleFill className={styles._social_icon} />
          </a> */}
          <a href="https://mobile.twitter.com/CauligenousCham" target="_blank" rel="noopener noreferrer">
            <RiTwitterFill className={styles._social_icon} />
          </a>
          <a href="https://discord.com/invite/yGNvcMtqmv" target="_blank" rel="noopener noreferrer">
            <SiDiscord className={styles._social_icon} />
          </a>
        </Grid>
      </Grid>
    </section>
  );
};

export default Footer;
