import React,{useState} from "react";

function Colorp(){

    const [color,setColor]= useState("#FFFFFF");

    function handlechangecolor(event){
        setColor(event.target.value);
    }
    
    return(
<div className="color-picker">
<h1>Pick a color</h1>
<div className="display-color" style={{backgroundcolor : color}}>
    <p>Selected Color: {color}</p>
</div>
<div className="div2"><h2>Select a color </h2>
<input type="color" value={color} onChange={handlechangecolor} />

</div>


</div>
    )
}
export default Colorp