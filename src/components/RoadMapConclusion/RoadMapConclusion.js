import styles from './RoadMapConclusion.module.scss';
import Button from '../../global/Button/Button';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import img from '../../assets/logo_white_background.jpg'

const RoadMapConclusion = () => {
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
        <img
          src={img}
          width={300}
          height={100}
          alt="horus1"
          objectFit="contain"
          loading="lazy"
          className={styles._roadmap_conclusion_image}
        />
      </Grid>
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
            Cricket&ensp;
            <span>Bank</span>
          </h2>
          <div className={styles.roadmap_conclusion_details}>
            <p>
              Cricket Bank will be a virtual bank in the metaverse platforms including but not limited to Decentraland and Sandbox. We are aiming to be a decentralised based bank allowing players to store, organise, share, and sell/buy virtual assets.
            </p>
            <p>
              Our vision is to make transferring digital assets in your metaverse bank accounts as easy as drag-and-drop. We are aiming to disrupt the existing wallets where people can have their assets in an unorganised manner and transfer, buy, and sell on high-fees on an environmentally unfriendly blockchain network where they pay huge gas fees whilst transferring their assets.
            </p>
            <p>
              Cricket Bank will operate on an environmentally friendly blockchain and will use environmentally more friendly coins. Users will be able to store their digital assets, their items that they use in the metaverse in the banks. This will help players to store their increasing in-game assets in an organised manner in a bank vault, allowing them to trade them across the bank marketplace and metaverse.
            </p>
            <p>
              As a member, you can store, organise, sell, buy, your digital assets, trade them in the marketplace, and drag-and-drop them to your bags in the bank.
            </p>
            <p>
              Launch will be only after the venture raises enough funds to execute the vision. We expect and indeed hope our Chameleons community to be patient and think long term when they mint their NFTs.
            </p>
            <p>
              In the early versions of metaverse games (e.g. World of Warcraft), players have the option to visit a local bank in a virtual city where they can store their digital assets, buy slots, organise their assets and sell their assets on the marketplace. Furthermore, these banks allow for Guilds to have their own banking slots. What we are actually seeing now in the NFT world is people building Guilds with their NFT communities. This is a very similar social structure to what we know in the current gaming world as Guilds. Guilds are a group, members-only communities where players play together, support each other, and go on quests together in the gaming world. It brings a sense of belonging and helps players to level up their characters faster whilst having fun with their community members. These communities, guilds, do open a bank account in the games where they can store guild assets to help the community. In these accounts, they share items, clothes, valuables, even game coins to help the community and allow members to withdraw and deposit under certain rules that they define as guild members.
            </p>
            <p>
              In the current NFT market, wallets do not allow organising assets. When the metaverse becomes widely used, this will become an issue for the assets of the player’s characters.
            </p>
            <p>
              There will be three parts of the bank operating on an environmentally friendly network using environmentally friendly crypto coins. The bank will allow digital game items to be easily tokenised and traded in primary and secondary markets that are managed by environmentally friendly blockchain networks.
            </p>
            <ul>
              <li>
                <b>Personal bank account:</b> This is where players can open a personal account to store and organise their virtual assets (via tags, different bag slots). They will also be able to deposit their coins if they choose to do so. This will also allow players to present their assets on the auction marketplace of the bank that will allow them to sell and buy other items across the communities.               </li>
              <li>
                <b>Guild Bank:</b> This is where the guild founders will be able to open a guild bank to allow storing and sharing their assets and coins in their guilds to help their members in the metaverse. This will allow them to deposit coins as well to have a shared monetary value for their guilds. Guilds will likely born from the NFT communities who will eventually migrate into metaverse.
              </li>
              <li>
                <b>Vault:</b> Vault will be where players will receive weekly awards as a result of their performance in the metaverse. These will be rewards that only the Cricket Bank account holders will receive on a weekly basis. The players will be able to trade these gifts in the game, if they choose to do so.
              </li>
            </ul>
            <p>
              For every transaction made between different accounts/players using the Cricket Bank, transactions will be free and instant. Buying and selling assets from your Cricket account to another player or marketplace will be gas fees but we will plant a tree in the world for every transaction you make.
            </p>
            <p>
              We are not going to have the network on an environmentally exhaustive and unfriendly network. The blockchain will be using networks that are using minimal energy. We will either do this by partnering with an environmentally-friendly network or we will build our own.
            </p>
            <p>
              Once the bank is launched, early adopters of <b>8-bit NFTs</b> and <b>10k NFTs</b> will receive a Platinum account for the Cricket Bank. These Platinum accounts will be the only Platinum accounts that will ever be launched in Cricket Bank. There will be several benefits and we will add more rewards along the way.
            </p>
            <ul>
              <li>
                <b>A Platinum Account holder</b> would have several benefits:
              </li>

              <ul className={styles.menu_depth_even}>
                <li>
                  Free forever; even after launching Cricket Bank.
                </li>
                <li>
                  Royalties for the first 3300 8-bit NFT holders from the resales of all NFTs on secondary markets (e.g. OpenSea).
                </li>
                <li>
                  Rewards and crypto coins from the vault based on profit-sharing.
                </li>
                <li>
                  Pre-Early access to venture’s fundraising for Cricket Bank.
                </li>
                <li>
                  Holders access to exclusive and private events that are about upcoming opportunities/investments, particularly in climate change technologies.
                </li>
                <li>
                  Once the Cricket Bank is launched, free 16 bags in the bank account with each bag having 28 slots to hold your NFT items that you have in the metaverse.
                </li>
                <li>
                  Low transaction fees across networks.
                </li>
                <li>
                  A physical and virtual bank card that you can use in the real world and metaverse.
                </li>
                <li>
                  Access to platinum private NFT auctions in the metaverse.
                </li>
                <li>
                  Access to interest-free and fee-free overdrafts; this will be available once we are regulated as a financial institution and can give credits.
                </li>
                <li>
                  Access to private clubs, social clubs, airport lounges around the world.
                </li>
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

export default RoadMapConclusion;


