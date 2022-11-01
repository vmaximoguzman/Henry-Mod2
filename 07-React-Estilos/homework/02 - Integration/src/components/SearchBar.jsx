import style from "./SearchBar.module.css";

export default function SearchBar(props) {
  return (
    <div className={style.busca}>
      <input type="search" className={style.agregar} />
      <button onClick={props.onSearch} className={style.boton}>
        Agregar
      </button>
    </div>
  );
}
