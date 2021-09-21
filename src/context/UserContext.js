import { createContext, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dificult, setDificult] = useState("");
  const [gordura, setGordura] = useState("");
  const [idade, setIdade] = useState("");
  const [pesoAtual, setPesoAtual] = useState("");
  const [pesoDesejado, setPesoDesejado] = useState("");

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
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
