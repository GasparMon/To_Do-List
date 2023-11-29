import { useSelector } from "react-redux";
import Card from "../Card/card";
import Card_Pending from "../Card_Pending/Card_Pending";
import "../Trash/Trash.modules.css"
import Card_Trash from "../Card_Trash/Card_Trash";

export default function Trash() {

  const myToDos = useSelector((state) => state.trash_todos);

  return (
    <div id="cards-div">
      {myToDos.map((element) => (
        <Card_Trash
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
