import { useSelector } from "react-redux";
import Card from "../Card/card";
import "../Cards/Cards.modules.css";

export default function Cards() {
  const myToDos = useSelector((state) => state.toDos);

  const landRender = () => {
    if (myToDos.length === 0) {
      return (
        <div id="main-landing">
          <h1>
            You Don't Have To-Do's in your list{" "}
            <span class="material-symbols-outlined">sentiment_satisfied</span>
          </h1>
          <h1>
            Creat a new one in{" "}
            <span class="material-symbols-outlined">library_add</span>
          </h1>
        </div>
      );
    }
    return null;
  };

  return (
    <div id="cards-div">
      <div id="form-title-land">
        <span class="material-symbols-outlined">receipt_long</span>
        <h1>My To - Do's </h1>
      </div>
      {landRender()}
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
