import Card from "./Card.jsx";
import style from "./Cards.module.css";

export default function Cards(props) {
  const { characters } = props;
  return (
    <div className={style.characters}>
      {characters.map((prop) => (
        <Card
          name={prop.name}
          species={prop.species}
          gender={prop.gender}
          image={prop.image}
          onClose={() => window.alert("Emulamos que se cierra la card")}
        />
      ))}
    </div>
  );
}
