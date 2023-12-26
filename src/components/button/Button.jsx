import React from "react";
import styles from "./Button.module.css";
import Link from "next/link";

export default function Button({ title, typ, url, style }) {
    return (
        <Link href={url}>
            <button type={typ} className={`${styles.button} ${style}`}>{title}</button>
        </Link>
    );
}