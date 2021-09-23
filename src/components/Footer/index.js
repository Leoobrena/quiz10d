import React from "react";

import styles from "./style.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <span>
        Todos os conhecimentos, dicas é métodos compartilhados são de propósito
        meramemte educaional. Jamais faça nenhuma mudança na sua alimentação ou
        estilo de vida alimentar sem antes consultar seu médico ou profissional
        de saúde. Se tiver qualquer dúvida, envie um e-mail para{" "}
        <strong>suporte@coach20mudar.com.br</strong> que responderemos o mais
        breve possível.
      </span>
      <br />
      <br />
      <span>
        Todos os direitos reservados &copy; Desafio 10 Dias Emagrecer com Saúde
      </span>
      <br />
      <br />
      <span style={{ color: "orange" }}>
        Pólitica de privacidade | Termos de Uso | Contato Reembolso
      </span>
    </div>
  );
}
