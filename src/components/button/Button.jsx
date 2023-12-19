import React from "react";
import styles from "./button.module.css";
import Link from "next/link";

export default function Button({title, url}) {
    return (
        <Link href={url}>
            <button className={styles.button}>{title}</button>
        </Link>
    );
}