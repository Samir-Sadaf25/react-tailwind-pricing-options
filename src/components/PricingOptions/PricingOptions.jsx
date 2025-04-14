import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOptions = ({priceingPromise}) => {
    const pricingData = use(priceingPromise);
    return (
        <div className='mt-32'>
            <h1 className='text-5xl mb-5'>Get out Membership</h1>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-2'>
                {
                     pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard> )
                }
            </div>
        </div>
    );
};

export default PricingOptions;