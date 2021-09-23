import React, { useContext, useEffect } from "react";
import Link from "next/link";
import { UserContext } from "../context/UserContext";

import styles from "../styles/question.module.css";

export default function QuestionThree() {
  const { name, setDificult, dificult } = useContext(UserContext);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Obrigado, {name} Qual é sua Maior Dificuldade para perder peso?
      </h1>

      <div className={styles.buttonContainer}>
        <button
          className={
            dificult === "Alimentação inadequada" ? styles.selected : ""
          }
          onClick={() => setDificult("Alimentação inadequada")}
        >
          Alimentação inadequada
        </button>
        <button
          className={dificult === "Metabolismo lento" ? styles.selected : ""}
          onClick={() => setDificult("Metabolismo lento")}
        >
          Metabolismo lento
        </button>
        <button
          className={dificult === "Ansiedade" ? styles.selected : ""}
          onClick={() => setDificult("Ansiedade")}
        >
          Ansiedade
        </button>
        <button
          className={dificult === "Falta de foco" ? styles.selected : ""}
          onClick={() => setDificult("Falta de foco")}
        >
          Falta de foco
        </button>
      </div>
      {dificult === "" ? (
        <button disabled type="submit" className={styles.button}>
          Continuar
        </button>
      ) : (
        <button type="submit" className={styles.button}>
          <Link href="/question-4">Continuar</Link>
        </button>
      )}
    </div>
  );
}
