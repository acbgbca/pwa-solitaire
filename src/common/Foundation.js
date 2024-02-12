import { useState } from "react";
import Card from "./Card";

export default function Foundation() {
    const [cards, setCards] = useState([]);

    let blank = "/cards/blank_card.svg";

    const cardList = [];
    for (let i = 0; i < cards.length; i++) {
        console.debug("Adding card:");
        console.debug(cards[i]);
        cardList.push(<Card card={cards[i]} topPosition={i * 50} leftPosition={0} />);
    }
    return <div className='foundation'>
        <img
            src={blank}
            alt={"Foundation"}
            width="100%"
        />
    </div>
}

