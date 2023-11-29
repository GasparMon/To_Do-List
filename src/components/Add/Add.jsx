import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Add/Add.modules.css";
import { add_todo } from "../../redux/action_types";

export default function Add(props) {

  function generateUniqueId() {
    const timestamp = new Date().getTime();
    const randomValue = Math.random().toString(36).substring(2, 8);
    return `${timestamp}-${randomValue}`;
  }

  const dispatch = useDispatch();

  

  const [toDo, setTodo] = useState({
    id:"",
    name: "",
    info: "",
    priority: "",
    type: "",
    color: "",
  });

  useEffect(() => {

    const uniqueId = generateUniqueId();

  setTodo({
    ...toDo,
    id: uniqueId
  });

  },[toDo.priority])

  const handleName = (event) => {

    setTodo({
      ...toDo,
      name: event.target.value,
    });
  };
  const handleInfo = (event) => {
    setTodo({
      ...toDo,
      info: event.target.value,
    });
  };

  const handlePriority = (event) => {

    setTodo({
      ...toDo,
      priority: event.target.value,
    });
  };

  const handleType = (event) => {
    setTodo({
      ...toDo,
      type: event.target.value,
    });
  };

  const handleColor = (event) => {
    setTodo({
      ...toDo,
      color: event.target.value,
    });
  };




  const handleCreate = (e) => {

    e.preventDefault();  
  
    if (!toDo.name || !toDo.info || !toDo.priority || !toDo.type || !toDo.color || !toDo.id) {
      window.alert("Por favor, completa todos los campos.");
    } else {
      dispatch(add_todo(toDo));
  
      setTodo({
        name: "",
        info: "",
        priority: "",
        type: "",
        color: "",
      });
    }
  };
  
 

  return (
    <div id="div-add">
    <div id="form-title">
      <span class="material-symbols-outlined">shadow_add</span>
      <h1>New To - Do </h1>
    </div>
    <div class="form_div">
      <div class="div_inputs">
        <span class="material-symbols-outlined">draw</span>
        <input
          type="text"
          placeholder="To-Do Title"
          name="text"
          class="input_form"
          value={toDo.name}
          onChange={handleName}
        />
      </div>
      <div class="div_inputs">
        <span class="material-symbols-outlined">description</span>
        <input
          type="text"
          placeholder="To-Do Description"
          name="text"
          class="input_form"
          value={toDo.info}
          onChange={handleInfo}
        />
      </div>
    </div>
    <div class="option_div">
      <p>Priority</p>
      <span id="span_id" class="material-symbols-outlined">
        emergency_home
      </span>
      <div class="wrapper">
        <div class="option">
          <input
            class="input"
            type="radio"
            name="btn"
            value="Low"
            checked={toDo.priority === "Low"}
            onChange={handlePriority}
          />
          <div class="btn">
            <span class="span_options">Low</span>
          </div>
        </div>
        <div class="option">
          <input
            class="input"
            type="radio"
            name="btn"
            value="Medium"
            checked={toDo.priority === "Medium"}
            onChange={handlePriority}
          />
          <div class="btn">
            <span class="span_options">Medium</span>
          </div>{" "}
        </div>
        <div class="option">
          <input
            class="input"
            type="radio"
            name="btn"
            value="High"
            checked={toDo.priority === "High"}
            onChange={handlePriority}
          />
          <div class="btn">
            <span class="span_options">High</span>
          </div>
        </div>
      </div>
    </div>
    <div class="option_div">
      <p>Type</p>
      <span id="span_id_2" class="material-symbols-outlined">
        format_list_bulleted
      </span>
      <div class="custom-wrapper">
        <div class="custom-option">
          <input
            class="custom-input"
            type="radio"
            name="custom-btn"
            value="Work"
            checked={toDo.type === "Work"}
            onChange={handleType}
          />
          <div class="custom-btn">
            <span class="custom-span_options">Work</span>
          </div>
        </div>
        <div class="custom-option">
          <input
            class="custom-input"
            type="radio"
            name="custom-btn"
            value="Study"
            checked={toDo.type === "Study"}
            onChange={handleType}
          />
          <div class="custom-btn">
            <span class="custom-span_options">Study</span>
          </div>
        </div>
        <div class="custom-option">
          <input
            class="custom-input"
            type="radio"
            name="custom-btn"
            value="Projects"
            checked={toDo.type === "Projects"}
            onChange={handleType}
          />
          <div class="custom-btn">
            <span class="custom-span_options">Projects</span>
          </div>
        </div>
        <div class="custom-option">
          <input
            class="custom-input"
            type="radio"
            name="custom-btn"
            value="Personal"
            checked={toDo.type === "Personal"}
            onChange={handleType}
          />
          <div class="custom-btn">
            <span class="custom-span_options">Personal</span>
          </div>
        </div>
        <div class="custom-option">
          <input
            class="custom-input"
            type="radio"
            name="custom-btn"
            value="Others"
            checked={toDo.type === "Others"}
            onChange={handleType}
          />
          <div class="custom-btn">
            <span class="custom-span_options">Others</span>
          </div>
        </div>
      </div>
    </div>
    <div class="option_div">
      <p>Colors</p>
      <span id="span_id_2" class="material-symbols-outlined">
        palette
      </span>
      <div class="color-wrapper">
        <div class="color-option">
          <input
            class="color-input"
            type="radio"
            name="color-btn"
            value="Blue"
            checked={toDo.color === "Blue"}
            onChange={handleColor}
          />
          <div class="color-btn">
            <span class="color-span_options">Blue</span>
          </div>
        </div>
        <div class="color-option">
          <input
            class="color-input"
            type="radio"
            name="color-btn"
            value="Green"
            checked={toDo.color === "Green"}
            onChange={handleColor}
          />
          <div class="color-btn">
            <span class="color-span_options">Green</span>
          </div>
        </div>
        <div class="color-option">
          <input
            class="color-input"
            type="radio"
            name="color-btn"
            value="Red"
            checked={toDo.color === "Red"}
            onChange={handleColor}
          />
          <div class="color-btn">
            <span class="color-span_options">Red</span>
          </div>
        </div>
        <div class="color-option">
          <input
            class="color-input"
            type="radio"
            name="color-btn"
            value="Yellow"
            checked={toDo.color === "Yellow"}
            onChange={handleColor}
          />
          <div class="color-btn">
            <span class="color-span_options">Yellow</span>
          </div>
        </div>
        <div class="color-option">
          <input
            class="color-input"
            type="radio"
            name="color-btn"
            value="Pink"
            checked={toDo.color === "Pink"}
            onChange={handleColor}
          />
          <div class="color-btn">
            <span class="color-span_options">Pink</span>
          </div>
        </div>
      </div>
    </div>
    <div class="option_div">
      <button class="button" id="form_button" onClick={handleCreate}>
        Create To-Do
        </button>
      </div>
    </div>
  );
}
