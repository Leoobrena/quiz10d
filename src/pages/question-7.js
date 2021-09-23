import React, { useContext } from "react";
import Link from "next/link";
import { UserContext } from "../context/UserContext";

import styles from "../styles/question.module.css";

export default function QuestionFive() {
  const { setPesoDesejado, name, pesoDesejado } = useContext(UserContext);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Qual o seu peso desejado, {name}?</h1>
      <input
        type="text"
        className={styles.input}
        onChange={(e) => setPesoDesejado(e.target.value)}
      />

      {pesoDesejado === "" ? (
        <button disabled type="submit" className={styles.button}>
          Continuar
        </button>
      ) : (
        <button type="submit" className={styles.button}>
          <Link href="/finish">Continuar</Link>
        </button>
      )}
    </div>
  );
}
