import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Main from '../components/Main'
import { ethers } from 'ethers'
import { useState } from 'react'
import { useEffect } from 'react'
import { ThirdwebSDK } from '@3rdweb/sdk'
import Sidebar from '../components/Share'
// import BsThreeDotsVertical from 'react-icons'
const sdk = new ThirdwebSDK(
  new ethers.Wallet(
    process.env.NEXT_PUBLIC_METAMASK_KEY,
    ethers.getDefaultProvider(
      "https://rinkeby.infura.io/v3/767c223011604bd083f0b7273cbe7be4"
    )
  )
)

const Dashboard = ({ address, filteredCoin }) => {
  const [sanityTokens,setSanityTokens] = useState([])
  const [ThirdWebTokens, setThirdWebTokens] = useState([])
  useEffect(() => {
  const getSanityAndThirdWebTokens = async () => {

      const coins = await fetch (
        "https://9sxptzke.api.sanity.io/v2021-03-25/data/query/production?query=*%5B_type%3D%3D'coins'%5D%7B%0A%20%20name%2C%0A%20%20contractaddress%2C%0A%20%20inrPrice%2C%0A%20%20symbol%2C%0A%20%20logo%0A%20%20%0A%7D"
      )
      const sanityTokens  = (await coins.json()).result;
      setSanityTokens(sanityTokens)
      setThirdWebTokens(
      sanityTokens.map(token => sdk.getTokenModule(token.contractaddress))
      )
    }
    getSanityAndThirdWebTokens();
  }, [])
  return (
    <Wrapper>
      {/* <Sidebar /> */}
      <MainContainer>
    <Header walletAddress = {address}
    sanityTokens = {sanityTokens}
    ThirdWebTokens = {ThirdWebTokens}
    />
    <Main filteredCoin={filteredCoin}
    walletAddress = {address}
    sanityTokens = {sanityTokens}
    ThirdWebTokens = {ThirdWebTokens}
    
    
    />
    </MainContainer>
    </Wrapper>
  )
}

export default Dashboard

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background-color: #0a0b0d;
  color: white;
  overflow: hidden;
`

const MainContainer = styled.div`
  flex: 1;
`