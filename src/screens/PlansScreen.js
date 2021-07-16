import React from 'react';
import './PlansScreen.css';
import { packagePlans } from '../data/data';

const PlansScreen = () => {
  return (
    <div className='plansScreen'>
      {packagePlans.map((plan) => {
        const { id, subscription, quality } = plan;
        return (
          <div className='plansScreen_plan'>
            <div className='plansScreen_info'>
              <h5>{subscription}</h5>
              <h6>{quality}</h6>
            </div>
            <button>Subscribe</button>
          </div>
        );
      })}
    </div>
  );
};

export default PlansScreen;
