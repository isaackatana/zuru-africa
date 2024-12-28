import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'

function SafariList() {
  const [safaris, setSafaris] = useState([]);

  useEffect(()=>{
    fetch('/api/safaris')
    .then((response) => response.json())
    .then((data) => setSafaris(data))
    .then((error) => console.log('Error fetching Safaris:', error))
  })

  return (
    <>
      {safaris.map((safari, index) => (
          <div key={safari.id} className={`wrapper`}>
            <h1>{safari.name}</h1>
            <Link to='/safaris/:id'>
            <img src={safari.thumbnail} alt="" />
            </Link>
            <div className="info">
              <div className="wrapper2">
                <h2>{safari.duration}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam suscipit magni officiis nemo possimus blanditiis.</p>
              </div>
            </div>
          </div>
      ))}
    </>
  );
}

export default SafariList;
