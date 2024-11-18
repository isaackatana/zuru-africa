import React from 'react'

const safariPhotos = [
    'https://idsb.tmgrup.com.tr/ly/uploads/images/2023/09/29/294329.jpg',
    'https://idsb.tmgrup.com.tr/ly/uploads/images/2023/09/29/294330.jpg',
    'https://idsb.tmgrup.com.tr/ly/uploads/images/2023/09/29/294328.jpg',
  ];

function SafariDetail() {
  return (
    <>
    <div className="safari-detail">
        <div className="wrapper">
            <img src={safariPhotos} alt="" />
            <div className="info">
                <h3>Name</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia fugiat pariatur ratione dolore nisi ut. Porro, mollitia. Numquam, mollitia et. Sint, culpa deserunt aut eveniet doloremque ipsum quibusdam autem maiores!</p>
                <button>Book trip</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default SafariDetail