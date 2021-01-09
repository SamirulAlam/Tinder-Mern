import React, { useState } from 'react';
import "./TinderCards.css";
import TinderCard from 'react-tinder-card'

function TinderCards() {

    const [people,setPeople]=useState([
        {
           name:"Elon Musk",
           url:"https://image.cnbcfm.com/api/v1/image/105773423-1551716977818rtx6p9yw.jpg?v=1551717428&w=678&h=381" 
        },
        {
            name:"Jeff Bezos",
            url:"https://upload.wikimedia.org/wikipedia/commons/6/6c/Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg"
        }
    ]);

    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
      }
       
      const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
      }

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map((person)=>(
                    <TinderCard
                    className="swipe"
                    key={person.name}
                    onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['up', 'down']}
                    >
                        <div
                            style={{backgroundImage:`url(${person.url})`}}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards
