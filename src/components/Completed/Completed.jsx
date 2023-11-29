import { useSelector } from "react-redux";
import Card_Completed from "../Card_Completed/Card_Completed";


export default function Completed (props){


    const myToDos = useSelector((state) => state.complete_todos);

  return (
    <div id="cards-div">
      {myToDos.map((element) => (
        <Card_Completed
        key={element.id}
        name={element.name}
        info={element.info}
        priority={element.priority}
        type={element.type}
        color={element.color}
        id={element.id}/>
      ))}
    </div>
  );

}