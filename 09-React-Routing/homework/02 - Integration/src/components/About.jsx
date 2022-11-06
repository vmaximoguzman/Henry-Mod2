import React from "react";
import style from "./About.module.css";

export default function About() {
  return (
    <div className={style.about}>
      <div className={style.tpDiv}>
        <div>
          <h1 className={style.tit}>Rick & Morty's App</h1>
        </div>

        <div className={style.parDiv}>
          <p className={style.par}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam eius
            provident ad, dolores quasi nobis ut eligendi excepturi aut! Numquam
            eos fuga iusto dolorem aliquam omnis corporis architecto
            consequuntur repudiandae.
          </p>
          <p className={style.par}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
            sequi delectus voluptatum ad iusto earum est amet quo consequatur
            facilis. Vel dolorum similique ipsam veniam voluptatibus doloribus
            dignissimos ullam velit.
          </p>
          <p className={style.par}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
            facilis facere nobis officiis. Cupiditate illum numquam ad quas
            quis, accusamus delectus pariatur corrupti magni sed natus corporis
            culpa cum repudiandae.
          </p>
        </div>
      </div>

      <div className={style.imgDiv}>
        <img
          src="https://pbs.twimg.com/media/EuKY5rmVgAAKf2N.jpg"
          alt="Giyu"
          className={style.img}
        />
      </div>
    </div>
  );
}
