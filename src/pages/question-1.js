import React, { useContext } from "react";
import Link from "next/link";

import { UserContext } from "../context/UserContext";

import styles from "../styles/question.module.css";

export default function QuestionOne() {
  const { setName } = useContext(UserContext);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Olá, Qual o seu nome? 🤔</h1>
      <input
        type="text"
        className={styles.input}
        onChange={(e) => setName(e.target.value)}
      />

      <button type="submit" className={styles.button}>
        <Link href="/question-2">Continuar</Link>
      </button>
    </div>
  );
}
