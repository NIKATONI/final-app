"use client";
import React, { useEffect, useState } from 'react'
import styles from "./page.module.css"
import Button from '@/components/button/Button';

export default function ProdcutCreate() {

  const [imageUrl, setImageUrl] = useState("");
  const [title, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [myPosts, setMyPosts] = useState("");

  const handleSubmit = () => {
    fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        price: price,
        description: desc,
        category: [0, "a", imageUrl, "", ""],
        images: imageUrl,
        rating: [0, 0],
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => { setMyPosts(json) });
      
  };

  return (
    <div className={styles.container}>
      <Button title={"Back"} url={"/shop"} style={styles.backButton} width={200} />
      <div className={styles.shopItemContainer}>
        <div className={styles.item}>
          <div className={styles.imageContainer}>
            <div className={styles.uploadFile}>
              <input type="url" id='url' className={styles.uploadFileInpt} onChange={(e) => { setImageUrl(e.target.value) }} />
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <input type="text" placeholder={"product name:"} onChange={(e) => { setName(e.target.value) }} className={styles.productName} />
          <textarea type="text" placeholder={"product description:"} onChange={(e) => { setDesc(e.target.value) }} className={styles.productDesc}></textarea>
          <div className={styles.priceSection}>
            <input type="text" placeholder={"product price:"} onChange={(e) => { setPrice(e.target.value) }} className={styles.productName} />
            <Button title={"Submit"} typ={""} url={""} style={styles.priceButton} click={() => { handleSubmit() }} />
          </div>
        </div>
      </div>
    </div>
  )
}