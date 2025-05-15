import React from 'react'

function Cards({ data }) {
  return (
    <div className="card" style={{ width: "15rem" }}>
      <img 
        src={data.images[0]} 
        className="card-img-top" 
        alt={data.title} 
      />
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text">
          {data.description}
        </p>
        <p className="card-price">${data.price}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  )
}

export default Cards