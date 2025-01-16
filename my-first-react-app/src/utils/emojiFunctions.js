import emojiData from "../data/emojiData.js";

const randomInteger = () => {
    return Math.floor(Math.random() * emojiData.length);
};

export default randomInteger;
