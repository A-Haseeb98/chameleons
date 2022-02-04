import styles from './Impact.module.scss';
// import Image from 'next/image';
import Button from '../../global/Button/Button';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';

const Impact = () => {
  const matches = useMediaQuery('(max-width:1024px)');
  return (
    <div className={styles.roadmap_conclusion}>

      <Grid
        container
        spacing={1}
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        className={styles.roadmap_conclusion}
      >
        <Grid item md={matches ? 10 : 7} sm={7} xs={11}>
          <h2 className={styles.roadmap_conclusion_title}>
            Environmental&ensp;
            <span>Impact</span>
          </h2>
          <div className={styles.roadmap_conclusion_details}>
            <ul>
              <li>
                Environmental Impact: Chameleons are all about making a positive impact in the environment and fighting Climate Change!
              </li>

              {/* <a href="" target="_blank" rel="noopener noreferrer"> */}

              <ul className={styles.menu_depth_even}>
                <li>
                  For both of our NFT projects (8-bit chameleons and chameleon avatars) CO2 emissions for each transaction including the gas fees will be calculated and required numbers of trees to recover the emissions in a year will be calculated. We will then ask our community to make donations to charities that plant trees. This will be entirely voluntary.  Some of the charities we picked are: <a href="https://www.nationaltrust.org.uk/features/plant-a-tree" target="_blank" rel="noopener noreferrer">National Trust UK</a>, <a href="https://www.worldlandtrust.org/product/plant-a-tree/" target="_blank" rel="noopener noreferrer">World Land Trust</a>, <a href="https://treesforlife.org.uk/" target="_blank" rel="noopener noreferrer">Trees for Life</a>. For a minimum £5, these charities plant one tree. A tree absorbs approximately 25 kg of CO2 per year. We will make calculations available for transactions on our dedicated Discord channel.                </li>
                <li>
                  For the second part of the project, we will launch a further collection consisting of 10,000 chameleon avatars. 10% of the profit of sales will be donated to <a href="https://www.worldwildlife.org/" target="_blank" rel="noopener noreferrer">World Wildlife Fund (WWF)</a> and/or <a href="https://www.rainforest-alliance.org/" target="_blank" rel="noopener noreferrer">Rainforest Alliance</a> (RA) . Every buyer will be provided with the proof of donation to the WWF or RA. This is only the start of the impact the Chameleons will make for the environment. Furthermore, CO2 emissions for each transaction including the gas fees will be calculated and numbers of trees to recover the emissions in a year will be calculated. Based on this, after the sales are completed the required amount of trees will be planted by making donations to a charity by the Chameleons (voluntary). All the numbers will be made available to the Cauligenous Chameleons community and investors. Furthermore, we will provide the proof of our donation from the sales.
                </li>
                <li>
                  Once we launch the <b className={styles.yellow}>Cricket Bank</b>, we will allow for opportunities to invest in sustainable energy projects for producing renewable energy. Furthermore, Cricket Bank account holders including Platinum Account Holders (owners of chameleon NFTs) will continue to make impact in the real world. We will continue planting trees per transactions across networks. Furthermore, storing your digital assets will mean that we will use funds to invest in climate-related projects in real world. Think of this as a usual bank in the real world who, unlike us, use money to fund oil projects. We won’t be doing this with Cricket Bank. Your digital assets stored in Cricket Bank will have real impact in the world with their asset values.
                </li>
                <li>
                  In addition, our users will receive rewards for fighting the climate crisis for the metaverse characters. Planting trees while they shop, cashback rewards, digital asset rewards for the metaverse.
                </li>
                <li>
                  All these benefits won’t only be available for personal account holders but will be available for guilds (other NFT communities) who will be able to open a guild bank account.
                </li>
              </ul>

              <li>
                In summary, <b>By being a fellow Chameleon</b>, chameleons will have an impact in the <b>real world</b> by:
              </li>

              <ul className={styles.menu_depth_even}>
                <li>
                  Get royalties from resales of all Chameleon NFTs. Holders of 3300 8-bit NFTs will receive royalties from resales of NFTs on the secondary markets.

                </li>
                <li>
                  Donating to WWF or RA and other organisations fighting environmental and climate change.
                </li>
                <li>
                  Planting trees for the per transaction (across networks) they make with their Chameleon account both in the real world and in the virtual world.
                </li>
                <li>
                  Investing in climate change-related projects from renewable energies to climate tech businesses. We will not invest money in oil projects or oil funds.
                </li>
                <li>
                  Making donations as guilds and planting trees in the real world through donations.
                </li>
                <li>
                  Investing in climate change projects including renewable energy projects and funds.
                </li>
                <li>
                  Contributing to the preservation of wildlife by donating to WWF and/or <a href="https://www.rainforest-alliance.org/" target="_blank" rel="noopener noreferrer">Rainforest Alliance (RA)</a>.
                </li>
                <li>
                  <b>Environmental Impact</b>: Planting trees in the real world, allowing account holders to invest their assets in renewable energy sources in the real world, and donations to world wildlife organisation.                 </li>
              </ul>

            </ul>
            <div className={styles._roadmap_conclusion_button}>
              <p>
                Read&ensp;

                <a href="https://onur-aydogan2.gitbook.io/cauligenous-chameleons-and-cricket-bank/" target="_blank" rel="noopener noreferrer">

                  Our Whitepaper
                </a>
                &ensp;for further details!
              </p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div >
  );
};

export default Impact;

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
