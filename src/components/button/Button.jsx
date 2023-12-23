import React from "react";
import styles from "./Button.module.css";
import Link from "next/link";

export default function Button({ title, url, style }) {
    return (
        <Link href={url}>
            <button className={`${styles.button} ${style}`}>{title}</button>
        </Link>
    );
}