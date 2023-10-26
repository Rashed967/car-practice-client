import React from 'react';

const ServiceCard = ({service}) => {
    const {title, price, img} = service
    return (
        <div className="card max-w-xs p-6 rounded-md bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body p-0 text-left mt-3">
    <h2 className="card-title">{title}</h2>
    <p>Price : ${price}</p>
    <div className="card-actions">
      <button className="btn btn-success btn-xs">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default ServiceCard;