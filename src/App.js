import React,{useState,useRef} from 'react';
import Card from './components/Card';
import CardList from './components/CardList';
import Score from './components/Score';
import Modal from './components/Modal';
import { useShuffleImages } from './components/useShuffleImages';

export default function App(){
    const [current_score, setCurrent_score] = useState(0);
    const [best_score, setBest_score] = useState(0);
    const [images,shuffleImages] = useShuffleImages();
    const [isGameOver, setIsGameOver] = useState(false);

    const clickedMap = useRef({});

    function checkIfGameOver(id){
        if(id in clickedMap.current || (!(id in clickedMap.current) && current_score === images.length-1 )){
            if(!(id in clickedMap.current) && current_score === images.length-1 )
                setCurrent_score(prevCurrent_score=>prevCurrent_score+1);
            setBest_score(prevBest_score=>Math.max(prevBest_score,current_score));
            setIsGameOver(true);
            // console.log(`check If Game Over: game is over. Current Score: ${current_score}, Best Score: ${best_score}`);
        }else{
            clickedMap.current[id]=true;
            setCurrent_score(prevCurrent_score=>prevCurrent_score+1);
            shuffleImages();
            // console.log(`check If Game Over: game is not over. Current Score: ${current_score}, Best Score: ${best_score}`);
        }
        // console.log(`Check if Game Over, clickedMap: `, clickedMap.current);
    }

    function restartGame(){
        clickedMap.current={};
        setIsGameOver(false);
        setCurrent_score(0);
        shuffleImages();
    }

    return (
        <main>
            <header>
                <div className='title'>Memory Game</div>
                <Score current_score={current_score} best_score={best_score} />
            </header>
            <CardList>
                {images.map(image=><Card key={image.id} name={image.name} src={image.src} id={image.id} isGameOver={checkIfGameOver}/>)}
            </CardList>
            {isGameOver && <Modal score={current_score} startNewGame={restartGame}/>}
        </main>
    )
}