import React, { useContext } from "react";
import Link from "next/link";
import { UserContext } from "../context/UserContext";

import styles from "../styles/question.module.css";

export default function QuestionFive() {
  const { setPesoAtual, pesoAtual } = useContext(UserContext);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Qual o seu peso atual?</h1>
      <input
        type="text"
        className={styles.input}
        onChange={(e) => setPesoAtual(e.target.value)}
      />

      {pesoAtual === "" ? (
        <button disabled type="submit" className={styles.button}>
          Continuar
        </button>
      ) : (
        <button type="submit" className={styles.button}>
          <Link href="/question-7">Continuar</Link>
        </button>
      )}
    </div>
  );
}
