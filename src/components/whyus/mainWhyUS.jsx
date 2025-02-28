import React, { useState } from 'react';
import LeftSection from '@/components/whyus/LeftSection';
import RightSection from '@/components/whyus/RightSection';

const mainWhyUS = () => {
  const [selectedTab, setSelectedTab] = useState("10K+ Happy Travellers");

  return (
    <div className='flex flex-row  md:mt-24 md:h-[33rem]    gap-6 w-full'>
      <LeftSection setSelectedTab={setSelectedTab} />
      <RightSection selectedTab={selectedTab} />
    </div>
  );
};

export default mainWhyUS;
