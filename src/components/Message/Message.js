import styles from './Message.module.scss';
import IMG from '../../assets/Message.png'
import Button from '../../global/Button/Button';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';

const RoadMapConclusion = () => {
    const matches = useMediaQuery('(max-width:1024px)');
    return (
        <div className="custom_container">
            <Grid
                container
                spacing={1}
                justifyContent="center"
                alignItems="center"
                alignContent="center"
                className={styles.roadmap_conclusion}
            >
                <Grid
                    item
                    md={matches ? 4 : 4}
                    sm={5}
                    xs={12}
                    className={styles.roadmap_conclusion_left_image}
                >
                    {/* <Image src="/chameleon.jpg" width={400} height={400} alt="horus1" /> */}
                    <img
                        src={IMG}
                        width={200}
                        height={200}
                        alt="horus1"
                        objectFit="contain"
                        loading="lazy"
                        className={styles._roadmap_conclusion_image}
                    />
                </Grid>
                <Grid item md={matches ? 8 : 5} sm={7} xs={12}>
                    <h2 className={styles.roadmap_conclusion_title}>
                        A few things&ensp;
                        <span>to remember</span>
                    </h2>
                    <div className={styles.roadmap_conclusion_details}>
                        <p>
                            By being an NFT holder you agree that you are interested in holding a Platinum account in the Cricket Bank once we launch our metaverse bank. We will not encourage our members to set a certain floor price. Anyone can sell their NFTs as they wish at any price they wish. However, this means that they will lose their privilege rights to be a Platinum account holder. Holding a Platinum account with its benefits in our metaverse bank Cricket Bank will be always free for the NFT holders. We suggest the potential interested people to not approach this as a usual NFT project. This is more than an NFT project with building the first virtual bank in metaverse. Only do your minting if you feel passionate about the idea, the vision, and execution after reading the whitepaper and roadmap clearly. We are onto something big and would like to build a genuine community with clear interest in a startup that aims to build a metaverse bank.
                        </p>
                        <div className={styles._roadmap_conclusion_button}>
                            <Button>Join Discord</Button>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default RoadMapConclusion;

// import styles from "./RoadMapConclusion.module.scss";
// import Image from "next/image";
// import Button from "../../global/Button/Button";

// const RoadMapConclusion = () => {
//   return (
// <div className={styles.roadmap_conclusion}>
//   {/* <Image
//     src="/Logos (use these ones)/logo_white_background.jpg"
//     width={180}
//     height={40}
//     alt="horus1"
//   /> */}
//   <img
//     src="/logo_transparent.png"
//     alt="horus1"
//     className={styles.roadmap_conclusion_image}
//   />
//   <h2 className={styles.roadmap_conclusion_title}>
//     The New Era <br />
//     Empire Phase <br />
//     <span>Development Roadmap</span>
//   </h2>
//   <div className={styles.roadmap_conclusion_details}>
//     <p>
//       The Ancient Cats Club has been around for thousands of years and is
//       here to stay to build a new era empire on Earth like they did before.
//       The New Era Empire Phase has been announced on our Discord Channel.
//       Check it out there! As always true believers in the Ancients Cats will
//       be rewarded. Be ready!
//     </p>

//     <Button>Join our Discord</Button>
//   </div>
// </div>
//   );
// };

// export default RoadMapConclusion;