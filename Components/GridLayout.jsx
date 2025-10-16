import HandleClick from "./HandleClick.jsx";
export default function GridLayout(props)
{
    const buttons = [1,2,3,4,5,6,7,8,9,0,"*","/","+","-","="];

    function ClearInput()
    {
        props.setState("");
        props.setArr([]);
    }


    return(
        <div>
            <h1>{props.arr.join(" ")}</h1>
            <div className="grid-container">
                {buttons.map((x) => (
                    <button key={x} onClick={(event) => HandleClick(event, props)} className="grid-button">
                        {x}
                    </button>
                ))}
            </div>
            <div className="clear-button">
                <button className="grid-button" onClick={ClearInput}>Clear</button>
                <button className="grid-button">Save</button>
            </div>
        </div>    
    )
}