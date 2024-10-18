import React from 'react';
import '../styles/gridOverlay.css';

const GridOverlay = () => {
return (
    <div className="grid-overlay">
        {Array.from({ length: 12 }).map((_, idx) => (
            <div key={idx} className="grid-column" />
        ))}
    </div>
    );
};

export default GridOverlay;
