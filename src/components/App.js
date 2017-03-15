import React from 'react';
import Board from './Board'
import Controls from './Controls'

const App = () => (
    <div className="app">
        <h1>Gama of Life</h1>
        <Controls />
        <Board />
    </div>
);

export default App