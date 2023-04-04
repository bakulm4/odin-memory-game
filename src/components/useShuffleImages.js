import {useState} from 'react';
import { nanoid } from 'nanoid';

import bluebell from '../../static/images/bluebell.jpg';
import rose from '../../static/images/rose.jpg';
import daisy from '../../static/images/daisy.jpg';
import dahlia from '../../static/images/dahlia.jpg';
import zinnia from '../../static/images/zinnia.jpg';
import sunflower from '../../static/images/sunflower.jpg';
import tulip from '../../static/images/tulip.jpg';
import marigold from '../../static/images/marigold.jpg';
import poppy from '../../static/images/poppy.jpg';
import gardenia from '../../static/images/gardenia.jpg';
import chrysanthemum from '../../static/images/chrysanthemum.jpg';
import orchid from '../../static/images/orchid.jpg';

export function useShuffleImages(){
    const [images, setImages] = useState([
        {
            name:'Bluebell',
            src:bluebell,
            id:nanoid()
        },
        {
            name:'Rose',
            src:rose,
            id:nanoid()
        },
        {
            name:'Daisy',
            src:daisy,
            id:nanoid()
        },
        {
            name:'Dahlia',
            src:dahlia,
            id:nanoid()
        },
        {
            name:'Zinnia',
            src:zinnia,
            id:nanoid()
        },
        {
            name:'Sunfower',
            src:sunflower,
            id:nanoid()
        },
        {
            name:'Tulip',
            src:tulip,
            id:nanoid()
        },
        {
            name:'Marigold',
            src:marigold,
            id:nanoid()
        },
        {
            name:'Poppy',
            src:poppy,
            id:nanoid()
        },
        {
            name:'Gardenia',
            src:gardenia,
            id:nanoid()
        },
        {
            name:'Chrysanthemum',
            src:chrysanthemum,
            id:nanoid()
        },
        {
            name:'Orchid',
            src:orchid,
            id:nanoid()
        },
    ]);

    function shuffleImages(){
        setImages(prevImages => [...prevImages].sort(()=>Math.random()- 0.5));
    }

    return [images,shuffleImages];
}
