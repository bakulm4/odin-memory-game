import React from 'react';

export default function Score({current_score, best_score}){
    return (
        <div className='score'>
            <div>Current Score: {current_score}</div>
            <div>Best Score: {best_score}</div>
        </div>
    )
}