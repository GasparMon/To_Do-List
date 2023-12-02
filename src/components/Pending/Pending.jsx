import { useSelector } from "react-redux";
import Card from "../Card/card";
import "../Pending/Pending.modules.css";
import Card_Pending from "../Card_Pending/Card_Pending";

export default function Pending() {

  const myToDos = useSelector((state) => state.process_todos);

  const landRender = () => {
    if (myToDos.length === 0) {
      return (
        <div id="main-landing">
          <h1>
            You don't have working on To-Do's in your list{" "}
            <span class="material-symbols-outlined">sentiment_satisfied</span>
          </h1>
          <h1>
            Start one in your ToDo Card{" "}
            <span class="material-symbols-outlined">more_time</span>
          </h1>
        </div>
      );
    }
    return null;
  };

  return (
    <div id="cards-div">
      <div id="form-title-pending">
      <span class="material-symbols-outlined">pending_actions</span>
      <h1>Working on To - Do's </h1>
    </div>
    {landRender()}
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
