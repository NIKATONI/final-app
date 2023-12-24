"use client";
import React, { useContext } from "react";
import styles from "./darkModeToggle.module.css";
import { ThemeContext } from "@/context/ThemeContext";

export default function DarkModeToggle() {

  const { toggle, mode } = useContext(ThemeContext);
  
  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={mode === "dark" ? { left: "3px" } : { right: "3px" }}
      />
    </div>
  );
}