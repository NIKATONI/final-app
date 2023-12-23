import React from 'react'
import styles from './navBar.module.css'
import Link from "next/link"

export default function Navbar() {

  const links = [
    {
      id: 1,
      title: "Home",
      url: "/"
    },
    {
      id: 2,
      title: "Shop",
      url: "/shop"
    },
    {
      id: 3,
      title: "About",
      url: "/about"
    }
  ]

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Shop
      </Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link href={link.url} className={styles.links}>{link.title}</Link>
        ))}
      </div>
    </div>
  );

}