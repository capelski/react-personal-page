import React from 'react';

export interface WheelPocFourProps {
    isSkeleton: boolean;
}

export const WheelPocFour: React.FC<WheelPocFourProps> = (props) => {
    const wheelStyle: React.CSSProperties = {
        position: 'relative',
        height: 300,
        width: 300,
        margin: '32px auto'
    };
    const tileStyle: React.CSSProperties = {
        position: 'absolute',
        top: 0,
        right: 0,
        height: 150,
        width: 150,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box'
    };
    const oddTileStyle: React.CSSProperties = {};
    const evenTileStyle: React.CSSProperties = {};
    const tileTextStyle: React.CSSProperties = {};

    if (props.isSkeleton) {
        tileStyle.border = '1px solid black';
    } else {
        wheelStyle.overflow = 'hidden';
        wheelStyle.borderRadius = 150;
        wheelStyle.border = '1px solid black';
        oddTileStyle.backgroundColor = '#0082ff';
        oddTileStyle.color = '#f2f2f2';
        evenTileStyle.backgroundColor = '#f2f2f2';
        evenTileStyle.color = '#0082ff';
        tileTextStyle.transform = 'rotate(25deg)';
    }

    return (
        <div style={wheelStyle}>
            <div style={{ ...tileStyle, ...oddTileStyle }}>
                <div style={tileTextStyle}>1</div>
            </div>
            <div
                style={{
                    ...tileStyle,
                    ...evenTileStyle,
                    transform:
                        'translateX(-75px) translateY(75px) rotate(90deg) translateX(75px) translateY(-75px)'
                }}
            >
                <div style={tileTextStyle}>2</div>
            </div>
            <div
                style={{
                    ...tileStyle,
                    ...oddTileStyle,
                    transform:
                        'translateX(-75px) translateY(75px) rotate(180deg) translateX(75px) translateY(-75px)'
                }}
            >
                <div style={tileTextStyle}>3</div>
            </div>
            <div
                style={{
                    ...tileStyle,
                    ...evenTileStyle,
                    transform:
                        'translateX(-75px) translateY(75px) rotate(270deg) translateX(75px) translateY(-75px)'
                }}
            >
                <div style={tileTextStyle}>4</div>
            </div>
        </div>
    );
};
