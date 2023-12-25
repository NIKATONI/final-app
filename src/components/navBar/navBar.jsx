"use client";
import React, { useState } from 'react'
import styles from './navBar.module.css'
import Link from "next/link"
import DarkModeToggle from "../darkModeToggle/DarkModeToggle"

export default function Navbar() {

  const [burgerClass, setBurgerClass] = useState(styles.burger);
  const [navClass, setNavClass] = useState(styles.links);

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

  const HandleBurger = () => {
    burgerClass == styles.burger ? setBurgerClass(styles.burgerActiv) : setBurgerClass(styles.burger);
    if(burgerClass == styles.burger) {
       setNavClass(styles.nav);
    }
  };

  const HandleLinks = () => {
    setBurgerClass(styles.burger);
    setNavClass(styles.links);
  }

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Shop
      </Link>
      <div className={burgerClass} onClick={HandleBurger}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      <div className={navClass}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link href={link.url} onClick={HandleLinks}>{link.title}</Link>
        ))}
      </div>
    </div>
  );

}