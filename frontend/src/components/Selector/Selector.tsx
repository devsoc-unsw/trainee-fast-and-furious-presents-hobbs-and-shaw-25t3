import styles from './Selector.module.css';

type SelectorProps = {
    emojis: Map<string, string>;
    onSelect: (value: string) => void;
}

const Selector = ({ emojis, onSelect }: SelectorProps) => {
  return (
    <div className={styles.selector}>
      {Array.from(emojis.entries()).map(([emoji, value]) => (
        <button
          key={emoji}
          className={styles.emojiButton}
          onClick={() => onSelect(value)}
          type="button"
          aria-label={value}
        >
          {emoji}
        </button>
      ))}
    </div>
  );
};

export { Selector };