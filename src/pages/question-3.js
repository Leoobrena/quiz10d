import React, { useContext } from "react";
import Link from "next/link";
import { UserContext } from "../context/UserContext";

import styles from "../styles/question.module.css";

export default function QuestionTwo() {
  const { name, setDificult } = useContext(UserContext);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Obrigado, {name} Qual é sua Maior Dificuldade para perder peso?
      </h1>

      <button>Alimentação inadequada</button>
      <button>Metabolismo lento</button>
      <button>Ansiedade</button>
      <button>Falta de foco</button>

      <button type="submit" className={styles.button}>
        <Link href="question-3">Continuar</Link>
      </button>
    </div>
  );
}
