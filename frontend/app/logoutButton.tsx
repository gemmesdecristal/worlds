"use client";

import { useRouter } from "next/navigation";
import { disconnect } from "./(lib)/disconnect";

export const LogoutButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={async () => {
        await disconnect();
        router.push("/login");
      }}
    >
      Logout
    </button>
  );
};
