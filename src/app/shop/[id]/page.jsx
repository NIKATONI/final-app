"use client";
import React, { useEffect, useState } from 'react'
import styles from "./page.module.css"
import Image from 'next/image'

const shopPost = ({ params }) => {

  const [shopItem, setShopItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imgCounter, setImageCounter] = useState(0);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${params.id}`)
      .then((response) => response.json())
      .then((json) => {
        setShopItem(json);
        setLoading(false);
      })
  }, [])

  const handleNextImage = () => {
    if (imgCounter == 2) {
      return;
    } else {
      setImgCounter(imgCounter + 1);
    }
  };

  const handlePrevImage = () => {
    if (imgCounter == 0) {
      return;
    } else {
      setImgCounter(imgCounter - 1);
    }
  };

  return (
    <div className={styles.container}>
      {loading && <div>please wait loading...</div>}
      {shopItem && (
        <div className={styles.shopItemContainer}>
          <div>
            <Image
              src={shopItem.images[0]}
              alt="productPhoto"
              width={350}
              height={350}
              className={styles.img}>
            </Image>
              <button></button>
          </div>
          <div>
            <h1 className={styles.title}>{shopItem.title}</h1>
            <p>{shopItem.description}</p>
          </div>
        </div>)}
    </div>
  )
};

export default shopPost;