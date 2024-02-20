import Link from "next/link";

export const NavBar = () => {
  return (
    <div>
      <Link href="/character">Character</Link>
      <Link href="/inventory">Inventory</Link>
      <Link href="/town">Town</Link>
    </div>
  );
};
