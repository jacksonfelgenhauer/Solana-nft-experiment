import React from "react";
import CandyMachine from "../components/CandyMachine";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import dynamic from "next/dynamic";

// Constants
const TWITTER_HANDLE = "jfwson";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const WalletDisconnectButtonDynamic = dynamic(
    async () => (await import('@solana/wallet-adapter-react-ui')).WalletDisconnectButton,
    { ssr: false }
);
const WalletMultiButtonDynamic = dynamic(
    async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
    { ssr: false }
);


//https://media.giphy.com/media/eSwGh3YK54JKU/giphy.gif
//https://media.giphy.com/media/6To7mnTymkfXlDEZjn/giphy.gif
//https://media.giphy.com/media/30lxTuJueXE7C/giphy.gif
const Home = () => {
    const wallet = useWallet();
    // Actions
    const renderNotConnectedContainer = () => (
        <div>
            <img src="https://media.giphy.com/media/30lxTuJueXE7C/giphy.gif" alt="emoji" />


            <div className="button-container">
                <WalletMultiButtonDynamic className="cta-button connect-wallet-button" />
            </div>
        </div>
    );

    return (
        <div className="App">
            <div className="container">
                <div className="header-container">
                    <p className="header">🍭 Candy Drop</p>
                    <p className="sub-text">NFT drop machine with fair mint</p>
                    {/* Render your connect to wallet button right here */}
                    {wallet.publicKey ? <CandyMachine walletAddress={wallet} /> : renderNotConnectedContainer()}
                </div>

                <div className="footer-container">
                    <img alt="Twitter Logo" className="twitter-logo" src="twitter-logo.svg" />
                    <a className="footer-text" href={TWITTER_LINK} target="_blank" rel="noreferrer">{`built by @${TWITTER_HANDLE}`}</a>
                </div>
            </div>
        </div>
    );
};

export default Home;
