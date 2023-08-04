import Link from "next/link";
import { updateFood } from "@/actions";


export default async function Edit({params}) {
    const id = params.id;
    console.log("id is", id);
    return (
        <div>
            <h1>Edit Food</h1>
            <form action={updateFood}>
                <label for={"foodName"}>New Name</label>
                <input placeholder="Food Name" name={"foodName"}/>
                <input type="hidden" value={id} name={"id"}/>
                <button type="submit">Submit Change</button>
            </form>
            <br/>
            <Link href="/" prefetch={false}>Head back to da list</Link>
        </div>
    )
}