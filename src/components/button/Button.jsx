import React from "react";
import styles from "./Button.module.css";
import Link from "next/link";

export default function Button({ title, typ, url, style, click }) {
    return (
        <Link href={url}>
            <button type={typ} className={`${styles.button} ${style}`} onClick={click}>{title}</button>
        </Link>
    );
}