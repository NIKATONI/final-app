"use client";
import React, { useEffect, useState } from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import Button from '@/components/button/Button';

const shopPost = ({ params }) => {

  const [shopItem, setShopItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imgCounter, setImgCounter] = useState(0);
  const [nextButton, setNextButton] = useState(true);
  const [prevButton, setPrevButton] = useState(true);

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
      setNextButton(false);
      return;
    }
    setImgCounter((counter) => counter + 1);
    setPrevButton(true);
  };

  const handlePrevImage = () => {
    if (imgCounter == 0) {
      setPrevButton(false);
      return;
    }
    setImgCounter(imgCounter - 1);
    setNextButton(true);
  };

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
                src={shopItem.images[imgCounter]}
                alt="productPhoto"
                width={350}
                height={350} />
              {prevButton && (<button
                onClick={() => { handlePrevImage() }}
                className={`${styles.prev} ${styles.imgButton}`}
              >prev</button>)}

              {nextButton && (
                <button
                  onClick={() => { handleNextImage() }}
                  className={`${styles.next} ${styles.imgButton}`}
                >next</button>
              )}
            </div>
          </div>
          <div className={styles.item}>
            <h1 className={styles.title}>{shopItem.title}</h1>
            <p>{shopItem.description}</p>
            <div className={styles.buySection}>
              <h2>{shopItem.price}$</h2>
              <button className={styles.buyButton}>Buy</button>
            </div>
          </div>
        </div>)}
    </div>
  )
};

export default shopPost;