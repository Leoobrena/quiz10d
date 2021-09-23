import Link from "next/link";

import styles from "../styles/question.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Para podermos entender melhor os seus objetivos, por favor, você precisa
        responder uma sequência de 7 perguntas.... Não vai levar nem 5 minutos.
        <br />
        <br />
        Clique no Botão Para Começar!
      </h1>

      <button type="submit" className={styles.button}>
        <Link href="/question-1">Começar 👍🏼</Link>
      </button>
    </div>
  );
}
