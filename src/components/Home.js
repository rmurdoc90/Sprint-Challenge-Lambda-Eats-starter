import React from "react";
import Pizza from './Pizza.jpg'

export default function Home(){
    return(
        <div>
            <h1>ORDER PIZZA</h1>
            <img src={Pizza} alt='pizza'/>
        </div>
    )
}