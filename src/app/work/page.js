import React from 'react';
import BackgroundImage from 'app/components/bgImage/bgImage';
import meImag from './../../images/me-img.jpeg';

const Work = () => {
  return (
    <div className='work-page relative'>
      <BackgroundImage imageUrl={meImag} />
    </div>
  );
};

export default Work;
