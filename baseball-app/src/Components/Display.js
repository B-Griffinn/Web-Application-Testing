import React from 'react';

function Display({ ball, strike, foul, hit }) {
    return (
        <div className="display">
            <div>
                <h1>Balls</h1>
                <p>{ball}</p>
            </div>
            
            <div>
                <h1>Strikes</h1>
                <p>{strike}</p> 
            </div>
            
            {/* do not need to display fouls
            <div>
            <h1>Fouls</h1>
            <p>{foul}</p>
            </div> 
            */}

            <div>
                <h1>Hits</h1>
                <p>{hit}</p> 
            </div>
        
        </div>
    )
}

export default Display;
