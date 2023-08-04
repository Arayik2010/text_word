import React from 'react'
import styles from '../../styles/Box.module.scss'

const Box = ({title,children}) => {
  return (
    <div className={styles.box_container}>
        <h1 className={styles.title}>{title}</h1>
        {children}

    </div>
  )
}

export default Box
