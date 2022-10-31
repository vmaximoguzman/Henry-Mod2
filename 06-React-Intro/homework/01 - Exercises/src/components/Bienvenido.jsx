import React from "react";
import Botones from "./Botones.jsx";

const studentName = "Máximo";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido(alerts) {
  // el código de tu componente acá
  return (
    <div>
      <h1>soy Henry!</h1>
      <h3>{studentName}</h3>
      <ul>
        {techSkills.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>

      <Botones props={alerts} />
    </div>
  );
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
