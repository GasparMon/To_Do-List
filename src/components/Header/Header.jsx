
import { Link, NavLink } from 'react-router-dom';
import '../Header/Header.modules.css'

export default function Header(props) {
  return (
    <>
      <div id="div-title">
        <h1>My To-Do List</h1>
        <span class="material-symbols-outlined">ballot</span>
      </div>
      <div id="div-botton">
      <NavLink to="/">
        <button class="main-botton">
          <span class="material-symbols-outlined">home</span>
        </button>
        </NavLink>
        <Link to="/add">
        <button class="main-botton">
          <span class="material-symbols-outlined">library_add</span>
        </button>
        </Link>
        <Link to="/pending">
        <button class="main-botton">
          <span class="material-symbols-outlined">more_time</span>
        </button>
        </Link>
        <Link to="/complete">
        <button class="main-botton">
          <span class="material-symbols-outlined">checklist_rtl</span>
        </button>
        </Link>
        <Link to="/trash"> 
        <button class="main-botton">
          <span class="material-symbols-outlined">auto_delete</span>
        </button>
        </Link>
      </div>
    </>
  );
}
