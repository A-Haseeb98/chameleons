import { useState } from "react";
import styles from "./Minter.module.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import Typography from "@mui/material/Typography";

const Minter = () => {
  const [isConnected, setConnected] = useState(false);

  const handleClick = () => {
    setConnected((prev) => !prev);
  };

  return (
    <div className={styles.minter}>
      {/* <h2 className={styles._title}>Public Sale Is Live :</h2> */}

      {/* {!isConnected && (
        <h2
          className={styles._title}
          style={{ color: "#f2f850", marginTop: "20px" }}
        >
          New to Metamask?
        </h2>
      )} */}
      {isConnected ? (
        <div className={styles._connect_wallet}>
          <h2 className={styles._title}>2800 / 2800</h2>

          <p className={styles._subtitle}>The sale has ended.</p>

          <p className={styles._subtitle}>
            You can still find Cauligenous Chameleons on
          </p>

          <a
            href="#"
            target="_blank" rel="noopener noreferrer"
            style={{
              color: "black",
              border: "1px solid gray",
              padding: "10px 15px",
              borderRadius: "3px",
              textDecoration: "none",
              margin: "10px 0",
              backgroundColor: "#fafafa",
            }}
          >
            Opensea
          </a>

          <p className={styles.transaction_details}>
            Price : <span>0.15</span> ETH + Gas fees
          </p>
          <p className={styles.transaction_details}>
            Each transaction will be limited to 10 NFTs.
          </p>
        </div>
      ) : (
        <Card className={styles._card}>
          <CardContent className={styles._card_content}>
            <AccountBalanceWalletIcon style={{ fontSize: "50px" }} />
            {/* <Typography variant="h6" color="inherit">
              Yes, let&apos;s get set up!
            </Typography>
            <Typography variant="subtitle2" color="inherit" component="p">
              This will create a new wallet and seed phrase!
            </Typography> */}
            <button className={styles.wallet_btn} onClick={handleClick}>
              connect a wallet
            </button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Minter;
