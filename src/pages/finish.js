import React, { useContext } from "react";
import Link from "next/link";
import { UserContext } from "../context/UserContext";

import styles from "../styles/question.module.css";

export default function QuestionFive() {
  const { idade, name, pesoAtual, pesoDesejado, handleSubmit, dificult } =
    useContext(UserContext);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {name}, obrigado por responder as perguntas, já analisamos as suas
        respostas: ⁣ ⁣ Você tem {idade} anos, Sua maior dificuldade é {dificult}
        , tem {pesoAtual} KG e Deseja chegar em {pesoDesejado} KG. ⁣ ⁣ O Desafio
        10D foi pensado exatamente para ajudar você chegar nos seus objetivos,
        por isso clique agora mesmo no botão abaixo para entrar para o nosso
        Desafio.⁣
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
