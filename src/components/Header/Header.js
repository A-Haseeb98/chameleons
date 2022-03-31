import { IconButton } from "@mui/material";
import styles from "./Header.module.scss";
import Grid from "@mui/material/Grid";
import LOGO from '../../assets/logo.png'
import Button from "../../global/Button/Button";
import {
  RiInstagramFill,
  RiTwitterFill,
  RiFacebookCircleFill,
  RiShip2Fill,
} from "react-icons/ri";
import { SiDiscord } from "react-icons/si";

import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const Header = ({
  topSection,
  introSection,
  featuresSection,
  roadMapSection,
  teamSection,
  whitePaperSection,
  faqSection,
  cricketBankSection,
  founderSection,
  impactSection
}) => {
  const matches = useMediaQuery("(max-width:1024px)");
  const mobileSize = useMediaQuery("(max-width: 899px)");
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <div className={`${styles.header_wrapper} `}>
      <div className="custom_container">
        <Grid
          container
          spacing={1}
          justifyContent="center"
          alignItems="center"
          alignContent="center"
        >
          <Grid
            item
            md={2}
            sm={4}
            lg={2}
            xs={8}
            style={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <img
              src={LOGO}
              alt="Charmeleons"
              // width={200}
              // height={100}
              width="200"
              height="100"
              
              objectFit="contain"
              onClick={topSection}
            />
          </Grid>
          <Grid container item md={10} sm={8} xs={4}>
            {mobileSize ? null : (
              <Grid item md={7} xs={12} className={styles.nav_wrapper}>
                <nav className={styles.navs}>
                  <ul className={styles.nav_list}>
                    {/* <li className={styles.nav_item} onClick={introSection}>
                      Intro
                    </li> */}
                    <li className={styles.nav_item} onClick={featuresSection}>
                      Features
                    </li>
                    <li className={styles.nav_item} onClick={impactSection}>
                      Environmental Impact
                    </li>
                    <li className={styles.nav_item} onClick={roadMapSection}>
                      Roadmap
                    </li>
                    <li className={styles.nav_item} onClick={teamSection}>
                      Team
                    </li>
                    <li className={styles.nav_item} onClick={founderSection}>Founder</li>
                    <li className={styles.nav_item} onClick={faqSection}>
                      FAQ
                    </li>
                    <li className={styles.nav_item} onClick={cricketBankSection}>Cricket Bank</li>
                    <a href="https://onur-aydogan2.gitbook.io/cauligenous-chameleons-and-cricket-bank/cricketz-coin" target="_blank" rel="noopener noreferrer">
                      <li className={styles.nav_item}>White Paper</li>
                    </a>
                  </ul>
                </nav>
              </Grid>
            )}
            <Grid item md={5} xs={12}>
              {mobileSize ? (
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <IconButton aria-label="Menu" onClick={toggleMenu}>
                    <MenuIcon style={{ fontSize: "50px", color: "#fff" }} />
                  </IconButton>
                </div>
              ) : (
                <Grid container>
                  <Grid
                    item
                    md={matches ? 12 : 7}
                    sm={12}
                    className={styles.nav_wrapper}
                  >
                    <nav className={styles.navs}>
                      <ul
                        className={styles.nav_list}
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          alignItems: "center",
                        }}
                      >
                        <li className={styles.nav_item}>
                          <a href="https://opensea.io/collection/cauligenouschameleons8bit" target="_blank" rel="noopener noreferrer">
                            <RiShip2Fill className={styles._social_icon} />
                          </a>
                        </li>
                        <li className={styles.nav_item}>
                          <a href="https://www.instagram.com/cauligenouschameleons/" target="_blank" rel="noopener noreferrer">
                            <RiInstagramFill className={styles._social_icon} />
                          </a>
                        </li>
                        <li className={styles.nav_item}>
                          <a href="https://mobile.twitter.com/CauligenousCham" target="_blank" rel="noopener noreferrer">
                            <RiTwitterFill className={styles._social_icon} />
                          </a>
                        </li>
                        {/* <li className={styles.nav_item}>
                          <RiFacebookCircleFill
                            className={styles._social_icon}
                          />
                        </li> */}
                        <li className={styles.nav_item}>
                          <a href="https://discord.com/invite/yGNvcMtqmv" target="_blank" rel="noopener noreferrer">
                            <SiDiscord className={styles._social_icon} />
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </Grid>
                  <Grid
                    item
                    md={matches ? 12 : 5}
                    sm={12}
                    style={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    <Button>Join our Discord</Button>
                  </Grid>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
        {mobileSize ? (
          <>
            {menu && (
              <div>
                <nav className={styles.mobile_navs}>
                  <ul className={styles.mobile_nav_list}>
                    {/* <li
                      className={styles.mobile_nav_item}
                      onClick={() => {
                        toggleMenu();
                        introSection();
                      }}
                    >
                      Intro
                    </li> */}
                    <li
                      className={styles.mobile_nav_item}
                      onClick={() => {
                        featuresSection();
                        toggleMenu();
                      }}
                    >
                      Features
                    </li>
                    <li
                      className={styles.mobile_nav_item}
                      onClick={() => {
                        impactSection();
                        toggleMenu();
                      }}
                    >
                      Environmental Impact
                    </li>
                    <li
                      className={styles.mobile_nav_item}
                      onClick={() => {
                        roadMapSection();
                        toggleMenu();
                      }}
                    >
                      Roadmap
                    </li>
                    <li
                      className={styles.mobile_nav_item}
                      onClick={() => {
                        teamSection();
                        toggleMenu();
                      }}
                    >
                      Team
                    </li>
                    <li
                      className={styles.mobile_nav_item}
                      onClick={() => {
                        founderSection();
                        toggleMenu();
                      }}
                    >
                      Founder
                    </li>
                    <li
                      className={styles.mobile_nav_item}
                      onClick={() => {
                        faqSection();
                        toggleMenu();
                      }}
                    >
                      FAQ
                    </li>

                    <li
                      className={styles.mobile_nav_item}
                      onClick={() => {
                        cricketBankSection();
                        toggleMenu();
                      }}
                    >
                      Cricket Bank
                    </li>
                    <a href="https://onur-aydogan2.gitbook.io/cauligenous-chameleons-and-cricket-bank/cricketz-coin">
                      <li className={styles.mobile_nav_item}>White Paper</li>
                    </a>
                  </ul>
                </nav>
                <nav className={styles.icon_navs}>
                  <ul
                    className={styles.icon_nav_list}
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <li className={styles.icon_nav_item}>
                      <a href="https://opensea.io/collection/cauligenouschameleons8bit" target="_blank" rel="noopener noreferrer">
                        <RiShip2Fill className={styles._social_icon} />
                      </a>
                    </li>
                    <li className={styles.icon_nav_item}>
                      <a href="https://www.instagram.com/cauligenouschameleons/" target="_blank" rel="noopener noreferrer">
                        <RiInstagramFill className={styles._social_icon} />
                      </a>
                    </li>
                    <li className={styles.icon_nav_item}>
                      <a href="https://mobile.twitter.com/CauligenousCham" target="_blank" rel="noopener noreferrer">
                        <RiTwitterFill className={styles._social_icon} />
                      </a>
                    </li>
                    <li className={styles.icon_nav_item}>
                      <a href="https://discord.com/invite/yGNvcMtqmv" target="_blank" rel="noopener noreferrer">
                        <SiDiscord className={styles._social_icon} />
                      </a>
                    </li>
                  </ul>
                </nav>
                <div>
                  <Button>Join our Discord</Button>
                </div>
              </div>
            )}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
