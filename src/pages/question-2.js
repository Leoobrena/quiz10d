import React, { useContext } from "react";
import { isEmail } from 'validator'
import Link from "next/link";
import { UserContext } from "../context/UserContext";

import styles from "../styles/question.module.css";

export default function QuestionTwo() {
  const { name, setEmail, email } = useContext(UserContext);
  const validateEmail = isEmail(email)

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Ok {name}, qual é o seu email que gostaria de receber nossas novidade?
      </h1>
      <input
        type="email"
        className={styles.input}
        onChange={(e) => setEmail(e.target.value)}
      />

      {validateEmail === false ? (
        <button disabled type="submit" className={styles.button}>
          Continuar
        </button>
      ) : (
        <button type="submit" className={styles.button}>
          <Link href="/question-3">Continuar</Link>
        </button>
      )}
    </div>
  );
}
