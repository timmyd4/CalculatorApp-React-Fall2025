import React from "react";
import GridLayout from "./GridLayout.jsx";
import Footer from "./Footer.jsx";


export default function App()
{
    const [state, setState] = React.useState("");
    const [arr, setArr] = React.useState([]);

    return(
        <>
            <h1>➗✖️Calculator➕➖</h1>
            <hr/>
            <GridLayout state={state} setState={setState} arr={arr} setArr={setArr} />
            <Footer/>
        </>
    )
}