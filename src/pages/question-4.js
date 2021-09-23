import React, { useContext } from "react";
import Link from "next/link";
import { UserContext } from "../context/UserContext";

import styles from "../styles/question.module.css";

export default function QuestionFour() {
  const { name, setGordura, gordura } = useContext(UserContext);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Onde a Gordura mais te incomoda, {name}?</h1>

      <div className={styles.buttonContainer}>
        <button
          className={gordura === "Barriga" ? styles.selected : ""}
          onClick={() => setGordura("Barriga")}
        >
          Barriga
        </button>
        <button
          className={gordura === "Braços" ? styles.selected : ""}
          onClick={() => setGordura("Braços")}
        >
          Braços
        </button>
        <button
          className={gordura === "Pernas" ? styles.selected : ""}
          onClick={() => setGordura("Pernas")}
        >
          Pernas
        </button>
        <button
          className={gordura === "Outro" ? styles.selected : ""}
          onClick={() => setGordura("Outro")}
        >
          Outro
        </button>
      </div>
      {gordura === "" ? (
        <button disabled type="submit" className={styles.button}>
          Continuar
        </button>
      ) : (
        <button type="submit" className={styles.button}>
          <Link href="/question-5">Continuar</Link>
        </button>
      )}
    </div>
  );
}
