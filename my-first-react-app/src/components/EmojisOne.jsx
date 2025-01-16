function EmojisOne(emojisOneProps) {
    return (
        <div className="term">
            <dt>
                <span className="emoji" role="img" aria-label={emojisOneProps.emojiOneName}>
                    {emojisOneProps.emojiOneEmoji}
                </span>
                <span>{emojisOneProps.emojiOneName}</span>
            </dt>
            <dd class="meaning">{emojisOneProps.emojiOneMeaning}</dd>
            <dd>
                <a class="link"
                    href="https://www.emojimeanings.net/list-smileys-people-whatsapp"
                    target="_blank">
                    emojimeanings.net
                </a>
            </dd>
        </div>
    );
}

export default EmojisOne;
