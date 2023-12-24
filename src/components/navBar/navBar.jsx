"use client";
import React, { useState } from 'react'
import styles from './navBar.module.css'
import Link from "next/link"
import DarkModeToggle from "../darkModeToggle/DarkModeToggle"

export default function Navbar() {

  const [burger, setBurger] = useState(true);

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
      { burger && (
        <div className={styles.burger}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
      )}
      <div className={styles.links}>
        <DarkModeToggle/>
        {links.map((link) => (
          <Link href={link.url} className={styles.links}>{link.title}</Link>
        ))}
      </div>
    </div>
  );

}