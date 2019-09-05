import React from 'react';

function Dashboard({ handleDisplay }) {
    return (
        <div>
            <h1>Hello from Dashboard</h1>
            <div className="buttons-container">
                <div className="buttons=bar">
                    <button 
                        onClick={() => handleDisplay('balls')} 
                    >
                        Balls
                    </button>
                    
                    <button 
                        onClick={() => handleDisplay('strike')}
                    >
                        Strikes
                    </button>

                    <button 
                    onClick={() => handleDisplay('hits')}
                    >
                        Hits
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
