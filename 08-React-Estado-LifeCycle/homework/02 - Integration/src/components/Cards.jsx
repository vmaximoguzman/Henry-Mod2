import Card from "./Card.jsx";
import style from "./Cards.module.css";

export default function Cards(props) {
  const { characters } = props;

  return (
    <div className={style.persona}>
      {characters.map((prop, key) => (
        <Card
          key={key}
          name={prop.name}
          species={prop.species}
          gender={prop.gender}
          image={prop.image}
          onClose={() => props.onClose(prop.id)}
        />
      ))}
    </div>
  );
}
