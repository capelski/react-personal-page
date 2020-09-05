import React, { useState } from 'react';

const wheelSize = 300; // Keep in sync with linear-gradient.scss $wheelSize
const wheelSpinDuration = 4000; // Keep in sync with linear-gradient.scss $wheelSpinDuration

export interface WheelProps {
    tiles: string[];
}

export const Wheel: React.FC<WheelProps> = (props) => {
    const tileDelta = 360 / props.tiles.length;
    const tileCenter = tileDelta / 2;
    const [isAnimated, setIsAnimated] = useState(false);
    const [wheelRotation, setWheelRotation] = useState(tileCenter);

    return (
        <React.Fragment>
            <div
                className={`wheel tiles-${props.tiles.length}${isAnimated ? ' animated' : ''}`}
                style={{ transform: `rotate(${-wheelRotation}deg)` }}
            >
                {props.tiles.map((tile, index) => (
                    <div
                        className="wheel-tile"
                        style={{
                            transform: `translateX(${-wheelSize / 4}px) translateY(${
                                wheelSize / 4
                            }px) rotate(${tileDelta * index}deg) translateX(${
                                wheelSize / 4
                            }px) translateY(${-wheelSize / 4}px)`
                        }}
                    >
                        <div className="tile-text">{tile}</div>
                    </div>
                ))}
            </div>
            <div className="button-wrapper">
                <button
                    type="button"
                    className={`button primary big ${isAnimated ? 'disabled-button' : ''}`}
                    disabled={isAnimated}
                    onClick={() => {
                        const chosenTile = Math.floor(Math.random() * props.tiles.length);
                        const tileRotation = chosenTile * tileDelta + tileCenter;
                        const fullSpins = 360 * Math.floor(Math.random() * 3 + 1);
                        const nextWheelRotation = fullSpins + tileRotation;
                        setIsAnimated(true);
                        setWheelRotation(nextWheelRotation);

                        setTimeout(() => {
                            setIsAnimated(false);
                            setWheelRotation(nextWheelRotation % 360);
                        }, wheelSpinDuration);
                    }}
                >
                    Spin
                </button>
            </div>
        </React.Fragment>
    );
};
