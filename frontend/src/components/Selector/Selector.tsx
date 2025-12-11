import styles from './Selector.module.css';

type SelectorProps = {
    emojis: Map<string, () => void>;
}

const Selector = (data: SelectorProps) => {
    const emojiEntries = data.emojis.entries();
    return (
        <>
            <div id={styles.selector}>
                {
                    emojiEntries.map(([key, val]) =>
                        <button className={styles.emojiButton} onClick={val}>{key}</button>
                    )
                }
            </div>
        </>
    );
}

export { Selector };