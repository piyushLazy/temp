'use client';

import React from 'react';
import './MapSection.css';

const MapSection = () => {
  return (
    <div className="map-container" >
      <div className="map-background">
        <img 
          src="https://dashboard.codeparrot.ai/api/assets/Z4u0EK44F0YMkTgO" 
          alt="Map background"
          className="map-bg-image"
        />
        <div className="map-marker">
          <img 
            src="https://dashboard.codeparrot.ai/api/assets/Z44u6r9JV5SvYOwr" 
            alt="Map marker"
            width={50}
            height={50}
          />
        </div>
      </div>
    </div>
  );
};

MapSection.defaultProps = {
  width: 545,
  height: 511
};

export default MapSection;