import { useState } from "react";
import Entreprise from "./entreprise";
import Reseau from "./reseau";
import ReactDOM from "react-dom";

function InformationAjout (props) {
    

    const [value, setValue] = useState(props.value);
    const handleChange = (e) => {
        e.preventDefault();
        setValue(e.target.value);
    }

    
    
    if (props.name === "Informations quelconques") {
        return (
            <div >
            <label for={props.name}>{props.name}   </label>
            <textarea class="info" type="text" name={props.name} id={props.name} onChange={handleChange} value={value}></textarea>



        </div>
        )
    } else {
        return(
            <div>
                <label for={props.name}>{props.name}   </label>
                <div className="input-button">
                <input class="info" type="text" name={props.name} id={props.name} onChange={handleChange} value={value}/>
                
                </div>
            </div>
        );
    }
    

    
}


export default InformationAjout;