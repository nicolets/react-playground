import { useState } from "react";
import './RandomColorSquare.css';

const colors = ['red', 'blueviolet', 'darkblue', 'green', 'yellow', 'orange', 'yellowgreen', 'grey']

export default function RandomColorSquare() {

    const [background, setBackground] = useState('black');

    function changeColor() {
        setBackground(colors.pop());
    }

    return <div id='square' onClick={changeColor} style={{background}}></div>
}

