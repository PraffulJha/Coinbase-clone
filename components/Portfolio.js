import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import CMCtable from './cmctable/CMCtable'




const Portfolio = ({filteredCoin, walletAddress,sanityTokens,ThirdWebTokens}) => {
  const [walletBalance, setWalletBalance] = useState(0);

  const tokenToINR = {};


  for (const token in sanityTokens) {
    tokenToINR[token.contractaddress] = Number(token.inrPrice);
  }

  useEffect(() => {
    const calculateTotalBalance = async () => {
      const totalBalance = await Promise.all(
        ThirdWebTokens.map(async (token) => {
          const balance = await token.balanceOf(walletAddress);
          return Number(balance.displayValue) * tokenToINR[token.address];
        })
      );
      setWalletBalance(totalBalance.reduce((acc, curr) => acc + curr, 0));
    };
    calculateTotalBalance();
  }, [ThirdWebTokens, sanityTokens]);
  
  return (
    <Wrapper>
      <Content>
        <Chart>
          <div>
            <Balance>
              <BalanceTitle>Portfolio balance</BalanceTitle>
              <BalanceValue>
                {'₹'}
                {walletBalance.toLocaleString()}
              </BalanceValue>
            </Balance>
          </div>
        </Chart>
        
        <PortfolioTable>
          <TableItem>
            <Title>Your Assets</Title>
          </TableItem>
          <TableItem>
            
          </TableItem>
          <Divider />
          <Table>
            <TableItem>
              <TableRow>
              <div style={{ marginLeft: 30, flex: 1 }}>Name</div>
              <div style={ {flex: 1}}> Symbol </div>
              <div style={{ flex: 1 }}>Price</div>
                <div style={{ flex: 0.5 }}>Curreny</div>
                <div style={{ flex: 1 }}>market Change</div>
                <div style={{ flex: 1 }}>market cap</div>
              </TableRow>
              <CMCtable filteredCoins={ filteredCoin }/>
              </TableItem>
              
          </Table>
        </PortfolioTable>
      </Content>
    </Wrapper>
  )
}

export default Portfolio

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  height: 100%;
`
const Content = styled.div`
  width: 100%;
  max-width: 1000px;
  padding: 2rem 1rem;
`

const Chart = styled.div`
  border: 1px solid #282b2f;
  padding: 1rem 2rem;
`

const Balance = styled.div``

const BalanceTitle = styled.div`
  color: #8a919e;
  font-size: 0.9rem;
`

const BalanceValue = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0.5rem 0;
`

const PortfolioTable = styled.div`
  margin-top: 1rem;
  border: 1px solid #282b2f;
`

const Table = styled.div`
  width: 100%;
`

const TableRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  & > th {
    text-align: left;
  }
`

const TableItem = styled.div`
  padding: 1rem 2rem;
`

const Divider = styled.div`
  border-bottom: 1px solid #282b2f;
`

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`