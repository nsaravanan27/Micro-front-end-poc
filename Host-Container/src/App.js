import React from 'react';
import Images from 'application_1/App';
import Videos from 'application_2/App';
import './App.css';

const App = () => (
    <div style={{ display: 'flex' }}>
        <div className="Images__wrapper">
            <h1>Search for images</h1>
            <Images />
        </div>
        <div className="Videos__wrapper">
            <Videos />
        </div>
    </div>
)

export default App;