import React from 'react'
import styled from 'styled-components'
import CoinList from '../public/CoinList'
import Payment from './Payment'
import Portfolio from './Portfolio'
import Share from './Share'
const Main = ( {filteredCoin,sanityTokens,ThirdWebTokens, walletAddress }) => {
  return (
    <Wrapper>
        {/* <CoinList filteredCoin = {filteredCoin} /> */}
        <Portfolio filteredCoin={filteredCoin}
        sanityTokens = {sanityTokens}
        ThirdWebTokens = {ThirdWebTokens}
        walletAddress = { walletAddress }
        />
    </Wrapper>
  )
}

export default Main

const Wrapper = styled.div`
    display: flex;
    max-height: calc(100 vh - 66px);
    overflow: hidden;
    overflow-y: scroll;
    :: -webkit-scrollbar {
      display: none;
    }
    & div {
        border-radius: 0.4rem;
    }

`