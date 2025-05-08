// src/components/MainContent.jsx
import React from 'react';
import Button from './Button';

function MainContent() {
    return (
        <div className="flex items-center justify-center gap-8 p-4 bg-white rounded-lg shadow-md">
            {/* Secțiunea de conținut */}
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold">Build strong relationships
                with client</h1>
                <p className="text-gray-700">
                Wiaka gets technological hurdles out of your way so you can see, perform, and grow at the height of your talents.
                </p>
                <div className="flex gap-2">
                  <Button/>
                </div>
            </div>

            {/* Secțiunea cu imagine */}
            <div className="flex-shrink-0">
                <img src="/HeroImage.png"
                    alt="Placeholder" 
                    className="w-48 h-48 object-cover rounded-md"
                />
            </div>
        </div>
    );
}

export default MainContent;
