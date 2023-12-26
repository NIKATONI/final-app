"use client";
import React, { useEffect, useState } from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import Button from '@/components/button/Button';
import NoImage from "../../../public/NoImage.jpg"

export default function ProdcutCreate() {

  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = () => {
    fetch("https://api.escuelajs.co/api/v1/products", {
      method: "POST",
      body: JSON.stringify({
        name,
        body: desc,
        price,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => { console.log(json); });
  };

  return (
    <div className={styles.container}>
      <Button title={"Back"} url={"/shop"} style={styles.backButton} width={200} />
      <div className={styles.shopItemContainer}>
        <div className={styles.item}>
          <div className={styles.imageContainer}>
            <div className={styles.uploadFile}>
              <input type="file" id='file' className={styles.uploadFileInpt} onChange={(e) => { setImage(e) }} />
              <label htmlFor='file'>Upload File</label>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <input type="text" placeholder={"product name:"} onChange={(e) => { setName(e) }} className={`${styles.productName} ${styles.inputF}`} />
          <textarea type="text" placeholder={"product description:"} onChange={(e) => { setDesc(e) }} className={`${styles.productDesc} ${styles.inputF}`}></textarea>
          <div className={styles.priceSection}>
            <input type="text" placeholder={"product price:"} onChange={(e) => { setPrice(e) }} className={`${styles.productName} ${styles.inputF}`} />
            <Button title={"Submit"} typ={"submit"} url={""} style={styles.priceButton} onClick={() => { handleSubmit() }} />
          </div>
        </div>
      </div>
    </div>
  )
}