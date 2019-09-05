import React from 'react';

function Dashboard({ handleDisplay }) {
    return (
        <div>
            <h1>Hello from Dashboard</h1>
            <div className="buttons-container">
                <div className="buttons=bar">
                    <button onClick={() => handleDisplay('balls')}>BALLS</button>

                    <button onClick={() => handleDisplay('strike')}>STRIKES</button>

                    <button onClick={() => handleDisplay('hits')}>HITS</button>

                    <button onClick={() => handleDisplay('foul')}>FOULS</button>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
