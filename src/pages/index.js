import { useState } from "react";
import { QuestionOne } from "../components/QuestionOne";

export default function Home() {
  const [name, setName] = useState("");

  function handleSetName(name) {
    setName(name);
  }

  return <QuestionOne setName={handleSetName} />;
}
