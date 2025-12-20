import { Root, Track, Range, Thumb } from "@radix-ui/react-slider";
import styles from './Slider.module.css'

type SliderProps = {
    value: number;
    onChange: (distance: number) => void;
}

export const Slider = ({ value, onChange }: SliderProps) => {
    return (
        <div className={styles.sliderRow}>
            <Root
                className={styles.root}
                max={5}
                min={0}
                step={0.1}
                value={[value]}
                onValueChange={newVal => onChange(newVal[0])}
                >
                <Track className={styles.track}>
                    <Range className={styles.range} />
                </Track>
                <Thumb className={styles.thumb} />
            </Root>
            <span className={styles.valueText}>{value} km</span>
        </div>
    )
}