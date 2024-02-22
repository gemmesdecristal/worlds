"use client";

import { useState } from "react";
import { authenticate } from "../(lib)/authenticate";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const submitAuth = async (gameName: string, characterId: string) => {
    const sessionData = await authenticate(gameName, characterId);
    if (sessionData) {
      router.push(`/game/${sessionData.gameId}/character/${sessionData.characterId}/profile`);
    }
  };

  const [gameName, setGameName] = useState("");
  const [characterId, setCharacterId] = useState("");

  return (
    <div>
      <h1>Bienvenue</h1>
      <input type="text" placeholder="Game Name" onChange={(e) => setGameName(e.target.value)} />
      <input type="text" placeholder="Character ID" onChange={(e) => setCharacterId(e.target.value)} />

      <button onClick={() => submitAuth(gameName, characterId)}>Validate</button>
    </div>
  );
};

export default Login;
