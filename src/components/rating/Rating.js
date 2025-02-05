import React from 'react';
import './Rating.css'

function Rating({children}){
    let empty = '☆☆☆☆☆'.split('');
    let rate = Math.round(children*1);
    for(let i = 0 ; i < rate; i++){
        empty[i] = '★';
       
    }
    return(
        <p className="rating-stars">{empty.join('')}</p>
    )
}

export default Rating;