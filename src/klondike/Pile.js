import Card from '../common/Card';

export default function Pile({ cards }) {
    console.debug("Cards: " + cards);

    const cardList = [];
    for (let i = 0; i < cards.length; i++) {
        console.debug("Adding card:");
        console.debug(cards[i]);
        cardList.push(<Card card={cards[i]} topPosition={i * 50} leftPosition={0} facingUp={cards[i].facingUp} />);
    }
    return <div className='pile' style={{
                height: cards.length * 50 + 200
    }}>
        {cardList}
    </div>
}

