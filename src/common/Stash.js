export default function Stash({ cards, onClick }) {
    let back = "/backs/blue.svg";
    let blank = "/cards/blank_card.svg";

    let obj;

    if (cards.length > 0) {
        obj = <img src={back} alt={"Stash"} width="100%" />
    } else {
        obj = <img src={blank} alt={"Waste"} width="100%" />
    }

    return <div className='stash' onClick={onClick}>
        { obj }
    </div>
}

