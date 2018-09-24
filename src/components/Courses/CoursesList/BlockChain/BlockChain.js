import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Youtube from "../../../UI/Youtube/Youtube";
import Margin from "../../../UI/Margin/Margin";

import BasicsOfBlockChain from "./Topics/BasicsOfBlockChain";
import HowToLearn from "./Topics/HowToLearn";
import Button from "../../../UI/Button/Button";

import ExpansionPanel from "../../../UI/ExpansionPanel/ExpansionPanel";

// stepper
import Stepper from "../../../UI/Stepper/Stepper";

// path
function getSteps() {
  return [
    "First Steps",
    "Week 1",
    "Week 2",
    "Week 3",
    "Week 4",
    "Week 5",
    "Week 6",
    "Week 7",
    "Week 8"
  ];
}

// switch cases for path
function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <React.Fragment>
          <Typography component="p" variant="body2">
            If you are truly interested in learning Blockchain follow below
            steps regularly. And you can learn the basics of Blockchain with in
            3 months follow the resources given below regularly.
          </Typography>
          <div style={{ marginTop: "20px" }} />
          <Typography component="h3" variant="headline">
            Steps
          </Typography>
          <Typography component="p" variant="body2">
            1. Do 1-2 Hrs of regular Coding
          </Typography>
          <Typography component="p" variant="body2">
            2. Watch youtube videos
          </Typography>
          <Typography component="p" variant="body2">
            3. Code Along while watching those videos
          </Typography>
          <Typography component="p" variant="body2">
            4. Watch videos with 1.5x-2x speed if you are comfortable
          </Typography>
          <Typography component="p" variant="body2">
            4. Repeat this daily
          </Typography>
          <Margin />
        </React.Fragment>
      );
    case 1:
      return (
        <React.Fragment>
          <Margin />

          <Margin />
          <Typography component="h3" variant="subheading">
            Learn Cryptography
          </Typography>
          <Button
            name="Cryptography course Link"
            link="https://www.coursera.org/learn/crypto"
          />
        </React.Fragment>
      );
    case 2:
      return (
        <React.Fragment>
          <Margin />
          <Typography component="h3" variant="subheading">
            Mastering Bitcoin + Bitcoin Whitepaper + Bitcoin Wallet
          </Typography>
          <Margin />

          <Button
            name="Link 1 Book"
            link="https://github.com/bitcoinbook/bitcoinbook"
          />
          <Button
            name="Link 2 Book"
            link="http://fermatslibrary.com/s/bitcoin"
          />
          <Button
            name="Link 3 wallet"
            link="https://bitcoin.org/en/choose-your-wallet"
          />
        </React.Fragment>
      );
    case 3:
      return (
        <React.Fragment>
          <Margin />

          <Margin />
          <Typography component="h3" variant="subheading">
            Build a blockchain + Bitcoin Cryptocurrency
          </Typography>
          <Button
            name="Cryptocurrency Course link"
            link="https://www.coursera.org/learn/cryptocurrency"
          />
          <Button
            name="Build blockchain link"
            link="https://hackernoon.com/learn-blockchains-by-building-one-117428612f46"
          />
        </React.Fragment>
      );
    case 4:
      return (
        <React.Fragment>
          <Margin />

          <Margin />
          <Typography component="h3" variant="subheading">
            Ethereum
          </Typography>
          <Button
            name="Udemy Course"
            link="https://www.udemy.com/blockchain-application/"
          />
          <Button
            name="Ethereum book"
            link="http://fermatslibrary.com/s/ethereum-a-next-generation-smart-contract-and-decentralized-application-platform#email-newsletter"
          />
        </React.Fragment>
      );
    case 5:
      return (
        <React.Fragment>
          <Margin />

          <Margin />
          <Typography component="h3" variant="subheading">
            Solidity Programming
          </Typography>
          <Button name="Solidity Link" link="https://cryptozombies.io/" />
          <Button
            name="Ethereum Article"
            link="https://blockgeeks.com/?s=ethereum"
          />
        </React.Fragment>
      );
    case 6:
      return (
        <React.Fragment>
          <Margin />

          <Margin />
          <Typography component="h3" variant="subheading">
            Other Cryptocurrencies
          </Typography>
          <Button
            name="youtube playlist"
            link="https://www.youtube.com/watch?v=cjbHqvr4ffo&list=PL2-dafEMk2A7jW7CYUJsBu58JH27bqaNL"
          />
        </React.Fragment>
      );
    case 7:
      return (
        <React.Fragment>
          <Margin />

          <Margin />
          <Typography component="h3" variant="subheading">
            Decentralized Applications
          </Typography>
          <Button
            name="Book Link"
            link="http://shop.oreilly.com/product/0636920039334.do"
          />
        </React.Fragment>
      );
    case 8:
      return (
        <React.Fragment>
          <Margin />

          <Margin />
          <Typography component="h3" variant="subheading">
            Build Decentralized Applicatins
          </Typography>
          <Button
            name="github link"
            link="https://github.com/moshest/p2p-index"
          />
        </React.Fragment>
      );
    default:
      return "Unknown step";
  }
}

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
});

class BlockChain extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div style={{ marginTop: "100px" }}>
        <Paper className={classes.root} elevation={2}>
          <Typography variant="headline" component="h3" color="primary">
            BlockChain
          </Typography>
          <Margin />
          <Margin />
          <Typography variant="body2" component="p">
            A blockchain, originally block chain, is a growing list of records,
            called blocks, which are linked using cryptography. Each block
            contains a cryptographic hash of the previous block, a timestamp,
            and transaction data. By design, a blockchain is resistant to
            modification of the data.
          </Typography>
          <Margin />
          <Typography component="h3" variant="headline">
            What is BlockChain ?
          </Typography>
          <Margin />
          <Typography component="p" variant="body2">
            “The blockchain is an incorruptible digital ledger of economic
            transactions that can be programmed to record not just financial
            transactions but virtually everything of value.”
          </Typography>
          <Youtube id="SSo_EIwHSd4" />
          <Typography
            variant="headline"
            style={{ marginTop: "50px" }}
            component="h3"
            color="primary"
          >
            Basics in BlockChain
          </Typography>
          <div style={{ marginTop: "30px" }}>
            <ExpansionPanel
              heading={"Basics of BlockChain"}
              component={<BasicsOfBlockChain />}
            />

            <ExpansionPanel
              heading={"How To Learn it"}
              component={<HowToLearn />}
            />
          </div>
          <div style={{ marginTop: "30px" }} />
          <Typography variant="headline" component="h3" color="primary">
            Path to Learn Block Chain
          </Typography>

          <Stepper path={getSteps} pathContent={getStepContent} />
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(BlockChain);
