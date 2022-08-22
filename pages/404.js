import Link from "next/link";

export default function NotFoundPage() {

  return (
    <>
      <p>Ops, página não encontrada.</p>
      <Link href={`/`} >
        <a>Página Inicial</a>
      </Link>
    </>
  )
}