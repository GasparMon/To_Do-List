import { useSelector } from "react-redux";
import Card from "../Card/card";
import "../Cards/Cards.modules.css";

export default function Cards() {

  const myToDos = useSelector((state) => state.toDos);

  return (
    <div id="cards-div">
      {myToDos.map((element) => (
        <Card
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
