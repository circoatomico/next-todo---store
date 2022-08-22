import Link from 'next/link'

export default function Products() {
  return (
    <>
      <p>Produtos</p>
      <ul>
        <li>
          <Link href='products/shirt'>
            <a>Shirt</a>
          </Link>
        </li>
      </ul>
    </>
  )
}