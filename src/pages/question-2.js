import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

import styles from "../styles/question.module.css";

export default function QuestionTwo() {
  const { name, setEmail } = useContext(UserContext);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Muito prazer, {name} e qual é o seu email🤔 ?
      </h1>
      <input
        type="email"
        className={styles.input}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button type="submit" className={styles.button}>
        Continuar
      </button>
    </div>
  );
}
