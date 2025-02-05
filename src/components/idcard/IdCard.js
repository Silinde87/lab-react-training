import React from 'react';
import './IdCard.css';

function IdCard({lastName, firstName, gender, height, birth, picture}){
    return(
        <article className="id-card">
            <img className="card-picture" src={picture} alt=""></img>
            <div>
                <p><strong>First name:</strong>{firstName}</p>
                <p><strong>Last name:</strong>{lastName}</p>
                <p><strong>Gender:</strong>{gender}</p>
                <p><strong>Height:</strong>{height}</p>
                <p><strong>Birth:</strong>{birth.toDateString()}</p>
            </div>
        </article>
    )
}

export default IdCard;