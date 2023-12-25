"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import styles from "./page.module.css"
import Image from 'next/image';

export default function Shop() {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [fromPrice, setFromPrice] = useState(0);
    const [toPrice, setToPrice] = useState(0);
    // aaa

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products", { cache: "force-cache" })
            .then((response) => response.json())
            .then((json) => {
                setData(json);
                let maxPrice = json.reduce(function (maxPrice, currentPrice) {
                    return (currentPrice.price > maxPrice.price) ? currentPrice : maxPrice;
                }, json[0]);

                setToPrice(maxPrice.price);
            });
    }, [])

    return (
        <div className={styles.container}>
            <input
                type="text"
                name="searchBar"
                id="searchBar"
                placeholder={"What are you looking for...?"}
                className={`${styles.searchBar} ${styles.inputF}`}
                onChange={(e) => { setSearch(e.target.value) }} />
            <div>
                <input
                    type="text"
                    name="fromPrice"
                    id="fromPrice"
                    placeholder={"From"}
                    className={`${styles.fromPrice} ${styles.inputF}`}
                    onChange={(e) => { setFromPrice(e.target.value) }} />
                <input
                    type="text"
                    name="toPrice"
                    id="toPrice"
                    placeholder={"To"}
                    value={toPrice}
                    className={`${styles.toPrice} ${styles.inputF}`}
                    onChange={(e) => { setToPrice(e.target.value) }} />
            </div>
            <div className={styles.itemHolder}>
                {data.filter((i) => {
                    return search.toLowerCase() === "" ?
                        i : i.title.toLowerCase().includes(search), i.price > fromPrice && i.price < toPrice;
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