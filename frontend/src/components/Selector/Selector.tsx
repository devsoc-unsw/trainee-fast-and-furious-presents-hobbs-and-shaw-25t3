import styles from './Selector.module.css';

type SelectorProps = {
    emojis: Map<string, () => void>;
}

const Selector = (props: SelectorProps) => {
    return (
        <>
            <div id={styles.selector}>
                {
                    Object.entries(props.emojis).map(([key, val]) =>
                        <button className={styles.emojiButton} onClick={val}>{key}</button>
                    )
                }
            </div>
        </>
    );
}

export { Selector };