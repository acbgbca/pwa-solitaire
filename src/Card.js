
export default function Card({ card }) {
    let filename = "/cards/" + card.suit + "_" + card.rank + ".svg";
    let altText = card.rank + " of " + card.suit;
    return <img
            src={filename}
            alt={altText}
        />
}

