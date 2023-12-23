"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import styles from "./page.module.css"
import Image from 'next/image';

// const getData = async () => {
//     const res = await fetch("https://api.escuelajs.co/api/v1/products", { cache: "force-cache" });

//     if (!res.ok) {
//         throw new Error("There is no data");
//     }

//     return res.json();
// }

export default function Shop() {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products", { cache: "force-cache" })
            .then((response) => response.json())
            .then((json) => {
                setData(json);
            });
    }, [])

    return (
        <div className={styles.container}>
            <input
                type="text"
                name="searchBar"
                id="searchBar"
                placeholder={"What are you looking for...?"}
                className={styles.searchBar}
                onChange={(e) => { setSearch(e.target.value) }} />
            <div className={styles.itemHolder}>
                {data.filter((item) => {
                    return search.toLowerCase() === "" ?
                        item : item.title.toLowerCase().includes(search);
                }).map((item) => (
                    <Link href={`/shop/${item.id}`} className={styles.card}>
                        <div className={styles.imageContainer}>
                            <Image
                                src={item.images[0]}
                                alt="Blog Image"
                                width={400}
                                height={200}
                                className={styles.image}
                            />
                        </div>
                        <div className={styles.content}>
                            <h1 className={styles.title}>{item.title}</h1>
                            <p className={styles.desc}>{item.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}