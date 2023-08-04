"use server";

import { revalidatePath } from "next/cache";

const API_URL = "http://localhost:3001/foods";
async function addFood(foodName) {
    await new Promise(r => setTimeout(r, 2000));
    const res = await fetch(API_URL, {
        method: "POST",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify({name: foodName})
    });
    const data = await res.json();
    revalidatePath("/");
}

async function deleteFood(id) {
    await new Promise(r => setTimeout(r, 2000));
    const res = await fetch(API_URL + "/" + id, {
        method: "DELETE",
        cache: "no-cache"
    });
    revalidatePath("/");
}

async function updateFood(data) {
    const id = data.get("id");
    const newName = data.get("foodName");
    await new Promise(r => setTimeout(r, 2000));
    const res = await fetch(API_URL + "/" + id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            cache: "no-cache",
          },
          body: JSON.stringify({name: newName}),
    });
    revalidatePath("/");

}



export { addFood, deleteFood, updateFood };