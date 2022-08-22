import Link from 'next/link'
import styles from '../../styles/Todos.module.css'

// um metodo do next que é uma especie de pre render.
export async function getStaticProps() {
  const data = await fetch ('https://jsonplaceholder.typicode.com/todos')

  const todos = await data.json()

  return {
    props: {
      todos
    }
  }
}

export default function Todos({ todos }) {
  return (
    <>
    <h1>Tarefas para fazer</h1>

    <ul className={styles.todolist}>
      {todos.map( (todo) => (
        <li key={todo.id}>
          {todo.title} - {' '}
          <Link href={`/todos/${todo.id}`}>
            <a>ver mais</a>
          </Link>
        </li>
      ))}
    </ul>
    </>
  )
}