import React from 'react'
import styles from './navBar.module.css'
import Link from "next/link"
import DarkModeToggle from "@/components/darkModeToggle/DarkModeToggle"

export default function Navbar() {

  const links = [
    {
      id: 1,
      title: "Home",
      url: "/"
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portFolio"
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog"
    },
    {
      id: 4,
      title: "About",
      url: "/about"
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact"
    },
    {
      id: 6,
      title: "DashBoard",
      url: "/dashBoard"
    }
  ]
  
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Lamamia
      </Link>
      <div className={styles.links}>
        <DarkModeToggle/>
        {links.map((link) => (
          <Link href={link.url} className={styles.links}>{link.title}</Link>
        ))}
        <button className={styles.logout}>Logout</button>
      </div>
    </div>
  );

}