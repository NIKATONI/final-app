"use client";
import React, { useEffect, useState } from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import Button from '@/components/button/Button';

const shopPost = ({ params }) => {

  const [shopItem, setShopItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((response) => response.json())
      .then((json) => {
        setShopItem(json);
        setLoading(false);
      })
  }, [])

  console.log("2", params);
  return (
    <div className={styles.container}>
      <Button title={"Back"} url={"/shop"} style={styles.backButton} width={200} />
      {loading && <div>please wait loading...</div>}
      {shopItem && (
        <div className={styles.shopItemContainer}>
          <div className={styles.item}>
            <div className={styles.imageContainer}>
              <Image
                src={shopItem.image}
                alt="productPhoto"
                width={350}
                height={350}
                className={styles.image} />
            </div>
          </div>
          <div className={styles.item}>
            <h1 className={styles.title}>{shopItem.title}</h1>
            <p>{shopItem.description}</p>
            <div className={styles.buySection}>
              <h2>{shopItem.price}$</h2>
              <Button title={"Buy"} url={""} style={styles.buyButton} />
            </div>
          </div>
        </div>)}
    </div>
  )
};

export default shopPost;