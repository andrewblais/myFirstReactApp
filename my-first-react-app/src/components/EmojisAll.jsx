import emojiData from "../data/emojiData";
import EmojisOne from "./EmojisOne";
import randomInteger from "../utils/emojiFunctions";

function getRandomIndices(number) {
    const randomIndices = new Set();

    while (randomIndices.size < number) {
        randomIndices.add(randomInteger());
    }

    return Array.from(randomIndices).map((index) => emojiData[index]);
}

function createEmojiDisplay(emojiDatum) {
    return (
        <EmojisOne
            key={emojiDatum.emojiDataId}
            emojiOneEmoji={emojiDatum.emojiDataEmoji}
            emojiOneName={emojiDatum.emojiDataName}
            emojiOneMeaning={emojiDatum.emojiDataMeaning}
        />
    );
}

function createEmojisDisplay() {
    const numToShow = 3;
    const randomEmojis = getRandomIndices(numToShow);

    return (
        <div>
            <h1>
                <span>Emoji Reference</span>
            </h1>
            <dl className="dictionary">
                {randomEmojis.map(createEmojiDisplay)}
            </dl>
        </div>
    );
}

export default createEmojisDisplay;
