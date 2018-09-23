import React from "react";
import { Typography } from "@material-ui/core";
import Margin from "../../../../UI/Margin/Margin";
import Youtube from "../../../../UI/Youtube/Youtube";
import YoutubeMid from "../../../../UI/Youtube/YoutubeMid";
import Button from "../../../../UI/Button/Button";
export default props => {
  return (
    <div>
      <Typography component="h3" variant="headline">
        Basics in BlockChain
      </Typography>
      <Margin />

      <Typography component="h3" variant="subheading" color="primary">
        Cryptography
      </Typography>
      <Typography component="p" variant="body2">
        Cryptography involves creating written or generated codes that allow
        information to be kept secret. Cryptography converts data into a format
        that is unreadable for an unauthorized user, allowing it to be
        transmitted without unauthorized entities decoding it back into a
        readable format, thus compromising the data.
      </Typography>
      <Margin />
      <Margin />
      <Typography component="p" variant="body2">
        Information security uses cryptography on several levels. The
        information cannot be read without a key to decrypt it. The information
        maintains its integrity during transit and while being stored.
        Cryptography also aids in nonrepudiation. This means that the sender and
        the delivery of a message can be verified.
      </Typography>
      <Typography component="p" variant="body2">
        Cryptography is also known as cryptology.
      </Typography>
      <Margin />
      <Margin />
      <Youtube id="jhXCTbFnK8o" />
      <Margin />
      <Margin />
      <Typography component="h3" variant="subheading" color="primary">
        Bitcoin
      </Typography>
      <Typography component="p" variant="body2">
        Bitcoin is a cryptocurrency, a form of electronic cash. It is a
        decentralized digital currency without a central bank or single
        administrator that can be sent from user to user on the peer-to-peer
        bitcoin network without the need for intermediaries
      </Typography>
      <Margin />
      <Margin />
      <Typography component="h3" variant="subheading">
        What is Bitcoin & Cryptocurrency ?
      </Typography>
      <Youtube id="kubGCSj5y3k" />
      <Margin />
      <Margin />

      <Typography component="h3" variant="subheading" color="primary">
        Mastering Bitcoin
      </Typography>
      <Typography component="p" variant="body2">
        Below link will help you master blockchain
      </Typography>
      <Button
        name="BitcoinBook"
        link="https://github.com/bitcoinbook/bitcoinbook"
      />
      <Button
        name="cryptocurrency course"
        link="https://www.coursera.org/learn/cryptocurrency"
      />

      <Margin />
      <Margin />

      <Margin />
      <Typography component="h3" variant="subheading" color="primary">
        Ethereum
      </Typography>

      <Typography component="h3" variant="subheading">
        What is Ethereum ?
      </Typography>
      <Typography component="p" variant="body2">
        Ethereum is an open-source, public, blockchain-based distributed
        computing platform and operating system featuring smart contract
        functionality. It supports a modified version of Nakamoto consensus via
        transaction-based state transitions
      </Typography>
      <Margin />
      <Margin />
      <YoutubeMid id="-_Qs0XdPpw8" />
      <Button
        name="udemy course"
        link="https://www.udemy.com/blockchain-application/"
      />

      <Margin />
      <Typography component="h3" variant="subheading" color="primary">
        Solidity Programming
      </Typography>
      <Typography component="p" variant="body2">
        Solidity is a contract-oriented programming language for writing smart
        contracts. It is used for implementing smart contracts on various
        blockchain platforms.
      </Typography>
      <Margin />
      <Margin />
      <Youtube id="v_hU0jPtLto" />
      <Margin />
      <Margin />

      <Margin />
      <Typography component="h3" variant="subheading" color="primary">
        Decentralized Applications
      </Typography>
      <Typography component="p" variant="body2">
        A decentralized application is an application that is run by many users
        on a decentralized network with trustless protocols. They are designed
        to avoid any single point of failure. They typically have tokens to
        reward users for providing computing power.
      </Typography>
      <Margin />
      <Margin />
      <Margin />
      <YoutubeMid id="VyQVlBQCX_Y" />
      <Button
        name="DA Book"
        link="http://shop.oreilly.com/product/0636920039334.do"
      />
      <Margin />
      <Margin />
    </div>
  );
};
