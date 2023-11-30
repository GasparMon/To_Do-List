import { useSelector } from "react-redux";
import Card_Completed from "../Card_Completed/Card_Completed";
import "../Completed/Completed.modules.css";

export default function Completed(props) {
  const myToDos = useSelector((state) => state.complete_todos);

  const landRender = () => {
    if (myToDos.length === 0) {
      return (
        <div id="main-landing">
          <h1>
            You Don't have Completed To-Do's in your list{" "}
            <span class="material-symbols-outlined">
              sentiment_very_dissatisfied
            </span>
          </h1>
          <h1>
            Complete new one in your ToDo Card{" "}
            <span class="material-symbols-outlined">check_circle</span>
          </h1>
        </div>
      );
    }
    return null;
  };

  return (
    <div id="cards-div">
      <div id="form-title-complete">
        <span class="material-symbols-outlined">library_add_check</span>
        <h1>Complete To - Do's </h1>
      </div>
      {landRender()}
      {myToDos.map((element) => (
        <Card_Completed
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
