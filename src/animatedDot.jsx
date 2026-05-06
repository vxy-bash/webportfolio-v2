import React from 'react'
import './BlinkingDot.css'; 


export default function AnimatedDot() { 
    const part1 = "Webportfolio..";
    const part2 = ".";

    return (
        <p className='blinkingtext'>
            {part1}
            <span className='blinkingDot'>
                {part2}
            </span>
        </p>
    );
}