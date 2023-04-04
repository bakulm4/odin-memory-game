import React from 'react';

export default function Card({name,src,id,isGameOver}){

    return (
        <div className='card' onClick={()=>isGameOver(id)}>
            <img src={src}></img>
            <footer>{name}</footer>
        </div>
    )
}