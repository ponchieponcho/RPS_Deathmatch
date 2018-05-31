import React from 'react';

export let RPSIcons = ({handleSelection}) =>

 <div className="rps-radio">

        <label className="paper-icon" htmlFor="paper">
        <input type="radio" name="rps" className="paper" onClick={ () => handleSelection("paper")}/>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 185">
            <path d="M141.14,79.4v-36c0-5.4-3.42-9.82-8.82-9.82-.39,0-1.24,0-1.63.07a10.44,10.44,0,0,0-9.13,10V74.86c0,2.51-.1,5.21-2.61,5.21h-.08c-2.71,0-7.1-2.87-7.1-5.58V24.28c0-5-2.57-9.48-7.57-10.06-.39-.05-1.29-.07-1.68-.07-5.4,0-10.33,4.42-10.33,9.83V74.67a4.85,4.85,0,0,1-4.86,4.73,4.91,4.91,0,0,1-4.93-4.8V10.12c0-5-2.48-9.47-7.48-10C74.53,0,73.58,0,73.2,0,67.79,0,62.81,4.42,62.81,9.83V74.6a4.91,4.91,0,0,1-4.92,4.8A4.85,4.85,0,0,1,53,74.66V24.28c0-5-2.38-9.48-7.38-10.06-.39-.05-1.39-.07-1.77-.07-5.4,0-10.43,4.42-10.43,9.83V97.12c0,2.72-1,4.53-3.3,4.53a3.14,3.14,0,0,1-2.45-1.24l-11.35-11a9.35,9.35,0,0,0-6.72-2.84,9.53,9.53,0,0,0-6.8,2.84,9.75,9.75,0,0,0,0,13.76L44.3,157.79v0l1,13.85a4.19,4.19,0,0,0,4.12,3.88h0l72.3-.12a4.15,4.15,0,0,0,4.08-3.62l1.89-14.39c.08-.61-.7-1.2-.36-1.73C138.42,138.51,141.14,110.12,141.14,79.4Z"/> 
        </svg>
        </label>

    <label className="rock-icon" htmlFor="rock">
    <input type="radio" name="rps" className="rock" onClick={ () => handleSelection("rock")} />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 185">
            <path d="M149.63,51.64c-2.44-20.69-14-27.18-24-27.18a23.29,23.29,0,0,0-4,.36,4.16,4.16,0,0,1-.6.05A5.64,5.64,0,0,1,116.59,22c-5.5-8.7-13-11-19.28-11a30.27,30.27,0,0,0-7.66,1,7.09,7.09,0,0,1-1.88.25A7,7,0,0,1,82.05,9.4,20,20,0,0,0,66,.71,17.1,17.1,0,0,0,54.77,4.86C53,6.38,51.6,7.52,50.17,7.52a4.21,4.21,0,0,1-3-1.74A18.28,18.28,0,0,0,33.57,0C25.22,0,17.08,5.41,17.09,16.59c0,18.78.09,8.59.11,25.57a7.11,7.11,0,0,1-4.35,6.58c-33.31,13.91,7.81,76.35,15.17,87a7,7,0,0,1,1.24,3.52l1.8,25.61c.28,3.73,3.39,8.28,7.14,8.28h0l80.44-1.76c3.58,0,6.62-3.5,7.08-7.06L129,139a8.16,8.16,0,0,1,1.1-3.17C151.61,102.61,152.22,73.58,149.63,51.64Z"/>
        </svg>
        </label>

    <label className="scissors-icon" htmlFor="scissors">
        <input type="radio" name="rps" className="scissors" onClick={ () => handleSelection("scissors")}/>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 190">
            <path d="M115.6,102.24C114,85.52,104.19,82.93,99.44,82.68a4.6,4.6,0,0,1-3.77-2.38,16.08,16.08,0,0,0-14.79-8.81c-.62,0-1.23,0-1.81.08H78.7A4.46,4.46,0,0,1,74.42,66c3.89-15.26,13.86-50.22,13.86-50.22C91.39,6.47,83.8,0,76.37,0,71.75,0,67.2,2.5,65.31,8.37l-14,46.56a6.63,6.63,0,0,1-12.65.12L25.31,13.6C23.72,7,18.69,4.08,13.61,4.08,6.36,4.08-1,10,1.27,19.38L15.66,79.26a4.48,4.48,0,0,1-3.25,5.4C7.73,85.87.93,89.71,0,101.81-1,116.58,20.74,145.33,24.9,151.39a4.45,4.45,0,0,1,.77,2.2l2.21,19.75c.18,2.34,2.13,3.64,4.48,3.64H86.91c2.37,0,4.32-1.33,4.48-3.69l1.79-18.17A3.93,3.93,0,0,1,94,153C97.9,147.25,117.45,121.5,115.6,102.24Z"/>
        </svg>
        </label>

</div>
    

export default RPSIcons;