import React from 'react';
import Pricingfeature from './Pricingfeature';

const PricingCard = ({pricing}) => {
    const {name,price,description,features} = pricing;
    return (
        <div className='border p-5 bg-amber-600 rounded-3xl text-white'>
            <div >
                <h1 className='text-7xl'>{name}</h1>
                <p className='text-3xl'>{price}</p>
            </div>
            <div className='p-4 bg-amber-400 rounded-2xl mt-2.5'>
                <p className='text-gray-600'>{description}</p>
                {
                    features.map((feature,idx) => <Pricingfeature key={idx} feature={feature}></Pricingfeature>)
                }
            </div>
        </div>
    );
};

export default PricingCard;