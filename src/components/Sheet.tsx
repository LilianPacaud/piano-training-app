import React from 'react';
import note from '../images/note.webp';

interface SheetProps {
    count: number;
  }
const positions = [
    45,
    95,
    145,
    195,
    245,
    295,
    345,
    // 425,
    // 475,
    // 525
]
const Sheet: React.FC<SheetProps> = ({count}) => {
    return(
    <div className="sheet">
        <img src={note} className="note" style={{top: positions[count]}}/>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
    </div>
    )
}

export default Sheet