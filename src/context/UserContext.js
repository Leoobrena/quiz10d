import { createContext, useState } from "react";
import axios from "axios";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dificult, setDificult] = useState("");
  const [gordura, setGordura] = useState("");
  const [idade, setIdade] = useState("");
  const [pesoAtual, setPesoAtual] = useState("");
  const [pesoDesejado, setPesoDesejado] = useState("");

  const data = {
    Nome: name,
    Email: email,
    Dificuldade: dificult,
    Gordura: gordura,
    Idade: idade,
    Peso_atual: pesoAtual,
    Peso_desejado: pesoDesejado,
  };

  async function handleSubmit() {
    await axios.post(
      "https://sheet.best/api/sheets/d5ffd075-8e2c-4028-bf25-9e8bc5366475",
      data
    );

    window.location.href = "https://coach20mudar.com.br/desafio-de-10-dias/";
  }

  return (
    <UserContext.Provider
      value={{
        name,
        setName,
        email,
        setEmail,
        dificult,
        setDificult,
        gordura,
        setGordura,
        idade,
        setIdade,
        pesoAtual,
        setPesoAtual,
        pesoDesejado,
        setPesoDesejado,
        handleSubmit,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
