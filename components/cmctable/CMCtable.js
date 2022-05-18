import React from 'react'
import { useState } from 'react';
import SearchBar from '../Searchbar';
import CoinList from '../../public/CoinList';

const CMCtable = ({filteredCoins}) => {
  const [search, setSearch] = useState('');

  const coinslist = filteredCoins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));

  const handleChange = e => {
    e.preventDefault();
    setSearch(e.target.value.toLowerCase());
  }
  return (
    <div className="coin__app">
      {/* <SearchBar type='text' placeholder='Search' onChange={handleChange} /> */}
      <CoinList filteredCoins={coinslist} />
    </div>
   
  )
}

export default CMCtable