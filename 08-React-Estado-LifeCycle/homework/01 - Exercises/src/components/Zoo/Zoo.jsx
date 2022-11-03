import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import Animals from "../Animals/Animals";
// eslint-disable-next-line no-unused-vars
import Species from "../Species/Species";
import "./Zoo.module.css";

export default function Zoo() {
  /* Escribe acá tu código */
  const [zoo, setZoo] = React.useState({
    zooName: "",
    animals: [],
    species: [],
    allAnimals: [],
  });

  const handleInputChange = (evento) => {
    setZoo({
      ...zoo,
      zooName: evento.target.value,
    });
    console.log(zoo);
  };

  React.useEffect(() => {
    fetch("http://localhost:3001/zoo")
      .then((res) => res.json())
      .then((data) =>
        setZoo({
          ...zoo,
          animals: data.animals,
          species: data.species,
          allAnimals: data.animals,
        })
      )
      .catch((error) => console.log(error));
  }, []);

  const todoAnimal = zoo.allAnimals;
  console.log(todoAnimal);

  const handleSpecies = (evento) => {
    const arrAnimal = [];

    zoo.animals.filter((animal) => {
      switch (evento.target.value) {
        case animal.specie:
          arrAnimal.push(animal);

          break;

        default:
          break;
      }
    });

    setZoo({ ...zoo, animals: arrAnimal });
  };

  const handleAllSpecies = () => {
    setZoo({ ...zoo, animals: todoAnimal });
  };

  return (
    <div>
      <label>Zoo Name:</label>
      <input type="text" value={zoo.zooName} onChange={handleInputChange} />
      <h1>{zoo.zooName}</h1>

      <Species
        species={zoo.species}
        handleSpecies={handleSpecies}
        handleAllSpecies={handleAllSpecies}
      ></Species>
      <Animals animals={zoo.animals} />
    </div>
  );
}
