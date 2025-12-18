import { useState } from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import styles from "./SliderDemo.module.css";

type SliderDemoProps = {
  // optional callback if you ever want to use the value in a parent
    onSelectDistance?: (distance: number) => void;
};

export function SliderDemo({ onSelectDistance }: SliderDemoProps) {
  // slider value stored as [number] (Radix style)
    const [value, setValue] = useState<number[]>([2]);

    const handleChange = (newValue: number[]) => {
        setValue(newValue);
    };

    const handleRandomClick = () => {
        // random int from 0–5 inclusive
        const random = Math.floor(Math.random() * 6);
        setValue([random]);

        // "save" selection – for now just log + optional callback
        console.log("Random distance selected:", random, "km");
        if (onSelectDistance) {
            onSelectDistance(random);
        }
    };

    const handleBackClick = () => {
        // placeholder for now – later you can hook up routing
        console.log("Back");
    };

    const distance = value[0];

    return (

        <div className={styles.page}>

            <h1 className={styles.heading}>
                How far can you go? <span className={styles.pin}>📍</span>
            </h1>

            <div className={styles.sliderRow}>
                <SliderPrimitive.Root
                    className={styles.root}
                    max={5}        // 0–5 km
                    min={0}
                    step={1}
                    value={value}
                    onValueChange={handleChange}
                    >
                    <SliderPrimitive.Track className={styles.track}>
                        <SliderPrimitive.Range className={styles.range} />
                    </SliderPrimitive.Track>
                    <SliderPrimitive.Thumb className={styles.thumb} />
                    </SliderPrimitive.Root>
                <span className={styles.valueText}>{distance} km</span>
            </div>

            <div className={styles.buttonsRow}>
                <button className={styles.backButton} onClick={handleBackClick}>
                    Back
                </button>

                <button className={styles.letUsDecideButton} onClick={handleRandomClick}>
                    Let Us Decide!
                </button>
            </div>

            <button
                className={styles.continueButton}
                onClick={() => {
                if (onSelectDistance) onSelectDistance(distance);
                }}
            >
                Continue...
            </button>

        </div>
    );
    }