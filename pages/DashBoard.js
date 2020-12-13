
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function DashBoard() {
  return (
    <div className={styles.container}>
        <h1>Punch Master</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
          <Link href="/about">
            <a>about</a>
          </Link>          
        </h2>
    </div>
  )
}
