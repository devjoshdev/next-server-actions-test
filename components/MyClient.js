"use client";

import { useState, useTransition } from "react";
import { addFood } from "@/actions";

/*
This should display the last thing in the API
*/
const MyClient = ({name}) => {
    const [foodName, setFoodName] = useState("");
    const [isPending, startTransition] = useTransition();
    return (
        <>
            <h1>Client</h1>
            {isPending ? <h2>A disturbance in the force</h2> : <h2>Name of Last Food: {name}</h2>}
            <input value={foodName} onChange={(e) => {setFoodName(e.target.value)}}></input>
            <button onClick={() => startTransition(() => addFood(foodName))}>Add Food</button>

        </>
    );

};

export default MyClient;