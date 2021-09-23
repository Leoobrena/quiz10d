import Link from "next/link";

import styles from "../styles/question.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        ❤️ Para Podermos Entender Melhor os Seus Objetivos, Por Favor, Responda
        à Sequência de 6 Perguntas, Leva Apenas 7 Minutinhos do Seu Tempo.
        <br />
        <br />
        👉 Clique no Botão Para Começar!
        <br />
        Leva menos 5 min.
      </h1>

      <button type="submit" className={styles.button}>
        <Link href="/question-1">Começar 👍🏼</Link>
      </button>
    </div>
  );
}
