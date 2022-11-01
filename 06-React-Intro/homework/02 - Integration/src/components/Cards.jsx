import Card from "./Card.jsx";

export default function Cards(props) {
  const { characters } = props;
  return (
    <div>
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
