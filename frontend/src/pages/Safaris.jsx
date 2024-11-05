import React from 'react'
import { Helmet } from 'react-helmet'
import SafariList from './SafariList';

const safaris = [
  {
    name: "Zanzibar"
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
      <div className="container">
        <SafariList safaris={safaris}/>
      </div>
    </div>
      
    </>
  )
}

export default Safaris