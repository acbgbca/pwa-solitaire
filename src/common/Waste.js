import Card from "./Card";

export default function Waste({ cards, onClick }) {
    let blank = "/cards/blank_card.svg";

    let obj;

    if (cards.length > 0) {
        obj = <Card card={cards[cards.length - 1]} facingUp={true} />
    } else {
        obj = <img src={blank} alt={"Waste"} width="100%" />
    }

    return <div className='waste' onClick={onClick}>
        {obj}
    </div>
}

