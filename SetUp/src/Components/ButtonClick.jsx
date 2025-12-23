import React from 'react'
import { useState } from 'react';

function ButtonClick() {
    const [text, setText] = useState("Not Clicked");
    // const handleClick = () => {
    //     setText("Clicked");
    // }
    const add = (a, b) => {
        return a + b;
    }
    const res = add(100, 3);
    return (
        <>
        <button onClick={()=>(setText("Clicked"))}>Click</button>
        <p>{text}</p>
        <p>{res}</p>
        </>
    )
}

export default ButtonClick;

// h1 -> ThemeSwitcher
// button -> ButtonClick
// p -> TextDisplay
// useState to manage theme state