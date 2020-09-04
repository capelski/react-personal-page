import React from 'react';

export interface WheelPocEightProps {
    isSkeleton: boolean;
}

export const WheelPocEight: React.FC<WheelPocEightProps> = (props) => {
    const wheelStyle: React.CSSProperties = {
        position: 'relative',
        height: 300,
        width: 300,
        margin: '80px auto'
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
    const oddTileStyle: React.CSSProperties = {
        color: '#f2f2f2'
    };
    const evenTileStyle: React.CSSProperties = {
        color: '#0082ff'
    };
    const tileTextStyle: React.CSSProperties = {
        transform: 'rotate(25deg)'
    };

    if (props.isSkeleton) {
        oddTileStyle.backgroundColor = '#0082ff';
        evenTileStyle.backgroundColor = '#f2f2f2';
    } else {
        oddTileStyle.background = 'linear-gradient(135deg, #0082ff 50%, transparent 50%)';
        evenTileStyle.background = 'linear-gradient(135deg, #f2f2f2 50%, transparent 50%)';
        tileTextStyle.width = '50%';
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
                        'translateX(-75px) translateY(75px) rotate(45deg) translateX(75px) translateY(-75px)'
                }}
            >
                <div style={tileTextStyle}>2</div>
            </div>
            <div
                style={{
                    ...tileStyle,
                    ...oddTileStyle,
                    transform:
                        'translateX(-75px) translateY(75px) rotate(90deg) translateX(75px) translateY(-75px)'
                }}
            >
                <div style={tileTextStyle}>3</div>
            </div>
            <div
                style={{
                    ...tileStyle,
                    ...evenTileStyle,
                    transform:
                        'translateX(-75px) translateY(75px) rotate(135deg) translateX(75px) translateY(-75px)'
                }}
            >
                <div style={tileTextStyle}>4</div>
            </div>
            <div
                style={{
                    ...tileStyle,
                    ...oddTileStyle,
                    transform:
                        'translateX(-75px) translateY(75px) rotate(180deg) translateX(75px) translateY(-75px)'
                }}
            >
                <div style={tileTextStyle}>5</div>
            </div>
            <div
                style={{
                    ...tileStyle,
                    ...evenTileStyle,
                    transform:
                        'translateX(-75px) translateY(75px) rotate(225deg) translateX(75px) translateY(-75px)'
                }}
            >
                <div style={tileTextStyle}>6</div>
            </div>
            <div
                style={{
                    ...tileStyle,
                    ...oddTileStyle,
                    transform:
                        'translateX(-75px) translateY(75px) rotate(270deg) translateX(75px) translateY(-75px)'
                }}
            >
                <div style={tileTextStyle}>7</div>
            </div>
            <div
                style={{
                    ...tileStyle,
                    ...evenTileStyle,
                    transform:
                        'translateX(-75px) translateY(75px) rotate(315deg) translateX(75px) translateY(-75px)'
                }}
            >
                <div style={tileTextStyle}>8</div>
            </div>
        </div>
    );
};
