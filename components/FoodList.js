"use client";

import { deleteFood } from "@/actions";
import { useTransition } from "react";
import Link from "next/link";

const FoodList = ({foods}) => {
    const [isPending, startTransition] = useTransition();
    return (
        <div>
            {foods.map(food => {
                return (
                    <div style={{display: "flex", flexDirection: "row", alignItems: "center",}}>
                        <p key={food.id} style={{marginRight: 50,}}>{food.name}</p>
                        <Link style={{marginRight: 25,}} href={`edit/${food.id}`}>Edit</Link>
                        {isPending ? <p>Delete happening</p> : <button style={{width: 50, height: 25,}} onClick={() => startTransition(() => deleteFood(food.id))}>Delete</button>}
                    </div>
                )
            })}
        </div>
    )
};

export default FoodList;