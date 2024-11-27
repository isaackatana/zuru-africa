import React from 'react'
import { Helmet } from 'react-helmet'
import SafariList from './SafariList';
import { FaSearch } from 'react-icons/fa';

const safaris = [
  {
    name: "Mombasa"
  },
  {
    name: "Malindi"
  },
  {
    name: "Kilifi"
  },
  {
    name: "Diani"
  },
];

function Safaris() {
  return (
    <>
    <Helmet>
      <title>Zuru Africa | Safaris</title>
    </Helmet>

    <div className="safaris">
      <div className="search-bar">
        <input type="text" placeholder='Search Safari'/>
        <div><FaSearch/></div>
      </div>
      <div className="container">  
        <SafariList safaris={safaris}/>
      </div>
    </div>
    
    </>
  )
}

export default Safaris