import React, { useContext } from "react";
import Link from "next/link";

import { toast } from "react-toastify";

import { UserContext } from "../context/UserContext";

import styles from "../styles/question.module.css";

export default function QuestionOne() {
  const { name, setName } = useContext(UserContext);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Qual o seu nome? 🤔</h1>
      <input
        type="text"
        className={styles.input}
        onChange={(e) => setName(e.target.value)}
      />

      {name === "" ? (
        <button disabled type="submit" className={styles.button}>
          Continuar
        </button>
      ) : (
        <button type="submit" className={styles.button}>
          <Link href="/question-2">Continuar</Link>
        </button>
      )}
    </div>
  );
}
