import { BadgeCheck } from 'lucide-react';
import React from 'react';

const Pricingfeature = ({feature}) => {
    return (
        <div>
            <p className='flex mb-1.5'><BadgeCheck className='mr-1'/> {feature}</p>
        </div>
    );
};

export default Pricingfeature;