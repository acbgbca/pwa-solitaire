import { useState } from "react";

export default function Card({ card, topPosition, leftPosition, facingUp = false }) {
    const [top, setTop] = useState(topPosition);
    const [left, setLeft] = useState(leftPosition);

    let id = card.suit + "_" + card.rank;
    let filename = "/cards/" + card.suit + "_" + card.rank + ".svg";
    let back = "/backs/blue.svg";
    let altText = card.rank + " of " + card.suit;

    let img = new Image();
    img.src = filename;

    const onDragStart = (data) => {
        data.dataTransfer.setDragImage(img, 0, 0);
    }

    const onDrop = (data) => {
        data.dataTransfer.setDragImage(img, 0, 0);
    }

    
    return <div
                draggable={facingUp}
                onDragStart={onDragStart}
                onDrop={onDrop}
                key={id}
                id={id}
                className='card'
                style={{
                    top: top,
                    left: left
                }}
            >
        <img
            src={facingUp ? filename : back}
            alt={facingUp ? altText : "Card"}
            width="100%"
        />
    </div>
}

