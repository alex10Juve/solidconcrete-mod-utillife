import { useState} from "react";
import { Button } from "reactstrap";


// var regexp = /^[-+]?[0-9]+\.[0-9]+$/;

export function IsNumeric(testValue){
    return !isNaN(parseFloat(testValue)) && isFinite(testValue);
}


export function Calculation(){

    const [xValue,setXValue] = useState(0);
    const [zValue,setZValue] = useState(0);
    const [yValue,setYValue] = useState(0);
    const [result,setResult] = useState(0);

    
    const handleChangeXValue = (event) => {
        if(IsNumeric(event.target.value)){
            setXValue(parseFloat(event.target.value));
        }
        else{
            
        }
    };

    const handleChangeYValue = (event) => {
        if(IsNumeric(event.target.value)){
            setYValue(parseFloat(event.target.value));
        }
        else{
            
        }
    };

    const handleChangeZValue = (event) => {
       if (IsNumeric(event.target.value)) {
           setZValue(parseFloat(event.target.value));
       }
       else{
           
       }
    };

    const handleClick = () => {
        setResult( (prevResult) => {
            return prevResult + xValue*yValue*zValue;
        });
    }

    return(
        <div className="container">
            <div className="container-input">
                <label>X value</label>
                <input placeholder="X value" onChange={handleChangeXValue} type="text" name="x" value={xValue} ></input>
                <label>Y value</label>
                <input placeholder="Y value" onChange={handleChangeYValue} type="text" name="y" value={yValue}></input>
                <label>Z value</label>
                <input placeholder="Z value" onChange={handleChangeZValue} type="text" name="z" value={zValue}></input>
                <Button color="danger" onClick={handleClick}>Calcular</Button>
            </div>
            <div className="container-results">
                <h1>{result}</h1>
            </div>
        </div>
        
    )
}