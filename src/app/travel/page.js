import React from 'react';
import BackgroundImage from 'app/components/bgImage/bgImage';
import workImag from './../../images/work-img.jpeg';

const Travel = () => {
  return (
    <div className='travel-page relative'>
      <BackgroundImage imageUrl={workImag} />
    </div>
  );
};

export default Travel;
