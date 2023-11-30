import { useSelector } from "react-redux";
import Card from "../Card/card";
import Card_Pending from "../Card_Pending/Card_Pending";
import "../Trash/Trash.modules.css";
import Card_Trash from "../Card_Trash/Card_Trash";

export default function Trash() {
  const myToDos = useSelector((state) => state.trash_todos);

  const landRender = () => {
    if (myToDos.length === 0) {
      return (
        <div id="main-landing">
          <h1>
            You Trash Box is Empty{" "}
            <span class="material-symbols-outlined">
              sentiment_very_satisfied
            </span>
          </h1>
          <h1>
            Delete your ToDo Card in{" "}
            <span class="material-symbols-outlined">scan_delete</span>
          </h1>
        </div>
      );
    }
    return null;
  };

  return (
    <div id="cards-div">
      <div id="form-title-trash">
        <span class="material-symbols-outlined">delete_forever</span>
        <h1>Trash To - Do's </h1>
      </div>
      {landRender()}
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
