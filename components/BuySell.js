import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';
import Buy from './Buy';
import Sell from './Sell';
const BuySell = ({filteredCoin, walletAddress,
    sanityTokens,
    ThirdWebTokens}) => {
        const [action, setAction] = useState("buy");
  const [selectedToken, setSelectedToken] = useState(sanityTokens[0]);
    }
  const selectedStyle = {
    color: "#3773f5",
  };

  const unselectedStyle = {
    border: "1px solid #282b2f",
  };
  const selectedModal = (option) => {
    switch (option) {
      case "buy":
        return (
          <Buy
            selectedToken={selectedToken}
            setAction={setAction}
            ThirdWebTokens={ThirdWebTokens}
            walletAddress={walletAddress}
          />
        );
      case "sell":
        return (
          <Sell
            setAction={setAction}
            selectedToken={selectedToken}
            walletAddress={walletAddress}
          />
        );
        default:
            return <h2>BUY</h2>;
        }

  return (<Wrapper>
    <Selector>
      <Option
        style={action === "buy" ? selectedStyle : unselectedStyle}
      >
        <p>Buy</p>
      </Option>
      <Option
        style={action === "sell" ? selectedStyle : unselectedStyle}
      >
        <p>Sell</p>
      </Option>
    </Selector>
    <ModalMain>{selectedModal(action)}</ModalMain>
  </Wrapper>
   
  )
}

const Wrapper = styled.div`
  height: 35rem;
  width: 27rem;
  color: white;
  border: 1px solid #282b2f;
  display: flex;
  flex-direction: column;
`;

const Selector = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 5rem;
`;

const Option = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  font-weight: 600;
  &:hover {
    cursor: pointer;
    background-color: #111214;
  }
`;

const ModalMain = styled.div`
  padding: 1rem;
  flex: 1;
`;

export default BuySell;