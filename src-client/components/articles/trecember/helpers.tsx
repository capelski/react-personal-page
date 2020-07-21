import React from 'react';

interface Day {
    number: number;
    isOddMonth: boolean;
}

interface Month {
    days: number[];
    name: string;
    weeks: number;
}

const getNumbers = (length: number) =>
    ' '
        .repeat(length)
        .split('')
        .map((_, i) => i + 1);

const getDays = (months: Month[]) =>
    months.reduce<Day[]>((_reduced, next, index) => {
        const days = next.days.map((day) => ({ number: day, isOddMonth: index % 2 === 0 }));
        return _reduced.concat(days);
    }, []);

const getYearWeeks = (months: Month[]) => {
    const yearDays = getDays(months);
    const yearWeeks = [];
    for (let i = 0; i < yearDays.length; i += 7) {
        yearWeeks.push(yearDays.slice(i, i + 7));
    }
    return yearWeeks;
};

interface YearBaseProps {
    onDayClick: (day: number) => void;
    selectedDay: number;
}

interface YearProps extends YearBaseProps {
    months: Month[];
    weeks: Day[][];
}

const Year: React.FC<YearProps> = (props) => (
    <div className="year">
        <div className="months">
            {props.months.map((month, monthIndex) => (
                <div
                    key={monthIndex}
                    className={`month weeks-${month.weeks} ${
                        monthIndex % 2 === 0 ? 'odd-month' : 'even-month'
                    }`}
                >
                    <div className="name">{month.name}</div>
                </div>
            ))}
        </div>
        <div className="weeks">
            {props.weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="week">
                    {week.map((day, dayIndex) => {
                        const dayKey = weekIndex * 7 + dayIndex;
                        return (
                            <div
                                key={dayKey}
                                className={`day clickable ${
                                    day.isOddMonth ? 'odd-month' : 'even-month'
                                }${props.selectedDay === dayKey ? ' selected' : ''}`}
                                onClick={() => props.onDayClick(dayKey)}
                            >
                                {day.number}
                            </div>
                        );
                    })}
                </div>
            ))}
        </div>
    </div>
);

const conventionalMonths: Month[] = [
    {
        days: getNumbers(31),
        name: 'January',
        weeks: 5
    },
    {
        days: getNumbers(28),
        name: 'February',
        weeks: 4
    },
    {
        days: getNumbers(31),
        name: 'March',
        weeks: 4
    },
    {
        days: getNumbers(30),
        name: 'April',
        weeks: 5
    },
    {
        days: getNumbers(31),
        name: 'May',
        weeks: 4
    },
    {
        days: getNumbers(30),
        name: 'June',
        weeks: 4
    },
    {
        days: getNumbers(31),
        name: 'July',
        weeks: 5
    },
    {
        days: getNumbers(31),
        name: 'August',
        weeks: 4
    },
    {
        days: getNumbers(30),
        name: 'September',
        weeks: 4
    },
    {
        days: getNumbers(31),
        name: 'October',
        weeks: 5
    },
    {
        days: getNumbers(30),
        name: 'November',
        weeks: 4
    },
    {
        days: getNumbers(31),
        name: 'December',
        weeks: 5
    }
];

export const ConventionalYear: React.FC<YearBaseProps> = (props) => (
    <Year {...props} months={conventionalMonths} weeks={getYearWeeks(conventionalMonths)} />
);

export const TrecemberYear: React.FC<YearBaseProps> = (props) => {
    const trecemberMonths: Month[] = conventionalMonths
        .map((m) => ({ days: getNumbers(28), name: m.name, weeks: 4 }))
        .concat({ days: getNumbers(29), name: 'Trecember', weeks: 5 });

    return <Year {...props} months={trecemberMonths} weeks={getYearWeeks(trecemberMonths)} />;
};
