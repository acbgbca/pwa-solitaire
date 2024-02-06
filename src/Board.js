import Card from './Card';

import { useState } from 'react';

export default function Board( { cards }) {

    console.info("Card list");
    console.info(cards);

    // Board contains
    // * 7 piles
    // * 4 foundations
    // * 1 stock
    // * 1 waste

    const cardList = [];
    for (let i = 0; i < cards.length; i++) {
        cardList.push(<Card card={cards[i]} />);
    }

    return <>
        <h1>Deck</h1>
        {cardList}
    </>
}