import React from "react";
import "./Put.css";
import CrudCard from "../../components/CrudCard/CrudCard";
import CrudButton from "../../components/CrudButton/CrudButton";
import { useState } from "react";
import  Axios  from "axios";

const Put = () => {


    const [coffeeFieldPut, setCoffeeFieldPut] = useState({
        name: "",
        country: "",
        date: null,
        picture: "",
        howToMake: "",
        infoVideo: ""
    });

    const [putName, setPutName] = useState("");

    const putButton = () => {
        const url = "http://localhost:3001/coffees/" + putName;
        Axios.put(url, coffeeFieldPut)
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return(
        <div>
            <div className= "putHeader">
                <h1 >Put a Coffee!</h1>
                <p className="putIntro"> fill out the form below if you'd like to overwrite an existing coffee in our database</p>
                <div className="changeInput">
                        <p> <u> I want to overwrite the coffee: </u> </p>
                        <input 
                            className="coffeePatchInput" 
                            type="text" 
                            placeholder="type coffee name here"
                            onChange={(event) => {
                                setPutName(event.target.value);
                            }}
                            > 
                        </input>
                </div>
            </div>
            <CrudCard 
                coffeeInformation = {coffeeFieldPut}
                setCoffeeInformation = {setCoffeeFieldPut}
            />
            <CrudButton 
                action={putButton}
                name="Put"
            />
        </div>
    )
        
}

export default Put;