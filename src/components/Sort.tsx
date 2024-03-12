/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react';
import svgImage from '../assets/svg/sortArrow.svg';

interface SortProps {
    setColor: (color: string) => void;
}

const listColors = ['all', 'red', 'green', 'yellow', 'blue', 'purple', 'white', 'orange'];

function Sort({setColor}: SortProps) {
    const [open, setOpen] = React.useState(false);
    const [selected, setSelected] = React.useState(0);
    const onClickColor = (i: number, color: string) => {
        setSelected(i);
        setOpen(false);
        setColor(color);
    };
    return (
        <div className='sort'>
            <div className='sort__label'>
                <img src={svgImage} alt='' />
                <b>Фильтрация по цвету:</b>
                <span onClick={() => setOpen(!open)}>{listColors[selected]}</span>
            </div>
            {open && (
                <div className='sort__popup'>
                    <ul>
                        {listColors.map((color, i) => (
                            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
                            <li
                                key={i}
                                onClick={() => onClickColor(i, color)}
                                className={selected === i ? 'active' : ''}
                            >
                                {color}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
export default Sort;
