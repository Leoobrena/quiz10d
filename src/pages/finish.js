import React, { useContext } from "react";
import Link from "next/link";
import { UserContext } from "../context/UserContext";

import styles from "../styles/question.module.css";

export default function QuestionFive() {
  const { idade, name, pesoAtual, pesoDesejado, handleSubmit } =
    useContext(UserContext);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Obrigado pelas informações, {name} o seu plano está pronto! Você tem
        {idade} anos, e pesa {pesoAtual} quilos. Muito em breve você estará
        pesando {pesoDesejado} quilos, com o corpo que você tanto deseja e
        merece!
      </h1>

      <button
        type="submit"
        className={styles.button}
        onClick={() => handleSubmit()}
      >
        Clique aqui para Entrar no Desafio
      </button>
    </div>
  );
}
