import Pile from './Pile';
import { ErrorBoundary } from '../common/ErrorBoundary';
import Stash from '../common/Stash';
import Waste from '../common/Waste';
import Spacer from '../common/Spacer';
import Foundation from '../common/Foundation';
import { useState } from 'react';

export default function Board( { cards }) {

    console.info("Card list");
    console.info(cards);

    const [piles, setPiles] = useState(() => {
        let index = 0;
        let tempPiles = [[], [], [], [], [], [], []];
        for (let i = 0; i < 7; i++) {
            for (let j = i; j < 7; j++) {
                if (i === j) {
                    cards[index].facingUp = true;
                }
                tempPiles[j].push(cards[index]);
                index++;
            }
        }
        return tempPiles;
    });
    const [stash, setStash] = useState(() => {
        let tempStash = [];
        for (let i = 28; i < cards.length; i++) {
            tempStash.push(cards[i]);
        }
        return tempStash;
    });
    const [waste, setWaste] = useState([]);

    const handleWaste = () => {
        console.debug("Handle waste");
        if (stash.length > 0) {
            console.debug("Adding card");
            waste.push(stash.shift());
            setStash(stash.slice());
            setWaste(waste.slice());
        }
    }

    const resetStash = () => {
        console.debug("Reset stash");
        if (stash.length === 0) {
            console.debug("Reset stash");
            setStash(waste.slice());
            setWaste([]);
        }
    }

    // Board contains
    // * 7 piles
    // * 4 foundations
    // * 1 stock
    // * 1 waste
    return <>
        <div className="board">
            <div className="pileRow">
                <Stash cards={stash} onClick={resetStash} />
                <Waste cards={waste} onClick={handleWaste}/>
                <Spacer />
                <Foundation />
                <Foundation />
                <Foundation />
                <Foundation />

            </div>
            <div className="pileRow">
                <ErrorBoundary>
                    <Pile cards={piles[0]} key="0" />
                </ErrorBoundary>
                <ErrorBoundary>
                    <Pile cards={piles[1]} key="1" />
                </ErrorBoundary>
                <ErrorBoundary>
                    <Pile cards={piles[2]} key="2" />
                </ErrorBoundary>
                <ErrorBoundary>
                    <Pile cards={piles[3]} key="3" />
                </ErrorBoundary>
                <ErrorBoundary>
                    <Pile cards={piles[4]} key="4" />
                </ErrorBoundary>
                <ErrorBoundary>
                    <Pile cards={piles[5]} key="5" />
                </ErrorBoundary>
                <ErrorBoundary>
                    <Pile cards={piles[6]} key="6" />
                </ErrorBoundary>
            </div>
        </div>
    </>
}
