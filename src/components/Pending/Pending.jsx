import { useSelector } from "react-redux";
import Card from "../Card/card";
import "../Pending/Pending.modules.css";
import Card_Pending from "../Card_Pending/Card_Pending";

export default function Pending() {

  const myToDos = useSelector((state) => state.process_todos);

  return (
    <div id="cards-div">
      {myToDos.map((element) => (
        <Card_Pending
        key={element.id}
        name={element.name}
        info={element.info}
        priority={element.priority}
        type={element.type}
        color={element.color}
        id={element.id}
        />
      ))}
    </div>
  );
}
