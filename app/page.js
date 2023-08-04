import MyClient from "@/components/MyClient";
import FoodList from "@/components/FoodList";

export default async function Home() {
  const data = await fetch("http://localhost:3001/foods", {cache: "no-store"});
  const json = await data.json();
  const last = json[json.length - 1];
  const lastName = last.name;
  return (
    <div>
      <h1>Sup</h1>
      <FoodList foods={json}/>
      <MyClient name={lastName}/>
    </div>

  )
}
