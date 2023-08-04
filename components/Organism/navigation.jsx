import Link from 'next/link'
import React from 'react'
import styles from '../../styles/nav.module.scss'

export const Navigation = () => {
  return (
    <div className={styles.nav_container}>
      <Link className={styles.link_item} href="/posts/textWord">Text Word</Link>
      <Link className={styles.link_item} href="/posts/game">Game</Link>
      <Link className={styles.link_item} href="/posts/users">Users</Link>
    </div>
  );
}
