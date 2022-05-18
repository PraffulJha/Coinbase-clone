import styled from 'styled-components'
import { useWeb3 } from '@3rdweb/hooks'
import Dashboard from './Dashboard'


// connect to metamask

export default function Home({ filteredCoin }) {

  const { address, connectWallet } = useWeb3()
  return (
    <Wrapper>
       {address ? (
        <Dashboard address={address}
        filteredCoin = { filteredCoin }
        
        />
      ) : (
      <WalletConnect>
      <Button onClick={() => connectWallet('injected')}>Connect Wallet</Button>
      <Details>
        You need a browser extension<br/>
        metamask<br/>
        To Download click         
        <a href='https://metamask.io/'/><br/>
        here
      </Details>
      </WalletConnect>
      )}
    </Wrapper>
  )
}
export const getServerSideProps = async () => {
  const res = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=10&page=1&sparkline=false'
  );

  const filteredCoin = await res.json();

  return {
    props: {
      filteredCoin
    }
  };
}


const Wrapper = styled.div`
  display: flex;
  height: 100%;
  background-position: center center;
  background-color: #0a0b0d;
  color: white;
  display: grid;
  place-items: center;
`

const WalletConnect = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Button = styled.div`
  /* flex: 0; */
  border: 1px solid #282b2f;
  padding: 0.8rem;
  font-size: 1.3rem;
  font-weight: 500;
  border-radius: 0.4rem;
  background-color: #3773f5;
  color: #000;
  &:hover {
    cursor: pointer;
  }
`

const Details = styled.div`
  font-size: 1.2rem;
  text-align: center;
  margin-top: 1rem;
  font-weight: 500;
  color: #282b2f;
`