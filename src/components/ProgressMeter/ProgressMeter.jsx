import React from 'react';
import './ProgressMeter.scss';

const ProgressMeter = ({ value, min, max }) => {
  return (
    <div className="progress-meter-container">
      <meter
        id="progress-meter"
        value={value}
        min={min}
        max={max}
      ></meter>
      <span className="progress-text">{value}%</span>
    </div>
  );
};

export default ProgressMeter;
