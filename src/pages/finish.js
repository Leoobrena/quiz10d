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
        {name}, muito obrigada por responder todas as perguntas, já analisamos
        as suas respostas 😃. <br /> Você tem {idade} anos, Sua maior
        dificuldade é {dificult} e você tá com {pesoAtual}kg, Deseja chegar aos{" "}
        {pesoDesejado}
        kg né mesmo!
        <br />
        Muito bem nosso desafio 10d foi pensado exatamente para ajudar pessoas
        iguais a você a chegar no seus objetivos, por isso se você estar
        interessada em conhecer nosso desafio.
        <br />
        <br />
        Clique no botão abaixo para garantir sua vaga no Desafio.
      </h1>

      <button
        type="submit"
        className={styles.button}
        onClick={() => handleSubmit()}
      >
        EU QUERO ENTRAR NO DESAFIO
      </button>
    </div>
  );
}
