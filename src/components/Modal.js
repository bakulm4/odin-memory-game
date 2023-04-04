import React from 'react';

export default function Modal({score,startNewGame}){

    return (
        <div className="modal-container">
            <div className='modal'>
                <div className='title'>Game Over!</div>
                <div className='score'>Your score: {score}</div>
                <button onClick={startNewGame}>New Game</button>
            </div>
        </div>
    )

}