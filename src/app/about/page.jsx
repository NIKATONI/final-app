import React from 'react'
import styles from "./page.module.css"
import user from "../../../public/User.png"
import Image from 'next/image'
import Link from 'next/link'

const getData = async () => {

  const res = await fetch("https://jsonplaceholder.typicode.com/users", { cache: "force-cache" });

  if (!res.ok) {

    throw new Error("There is no data");

  }

  return res.json();

}

export default async function About() {

  const users = await getData();

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h1 className={styles.title}>Name</h1> <br /> <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Earum, adipisci eum. Facere aut vel, quaerat deleniti
          omnis quae neque cumque voluptatem odit error sit,
          distinctio earum sequi aperiam. Amet, quos.Lorem ipsum
          dolor sit amet consectetur adipisicing elit.
          Earum, adipisci eum. Facere aut vel, quaerat deleniti
          omnis quae neque cumque voluptatem odit error sit,
          distinctio earum sequi aperiam. Amet, quos.Lorem ipsum
          dolor sit amet consectetur adipisicing elit.
          Earum, adipisci eum. Facere aut vel, quaerat deleniti
          omnis quae neque cumque voluptatem odit error sit,
          distinctio earum sequi aperiam. Amet, quos.Lorem ipsum
          dolor sit amet consectetur adipisicing elit.
          Earum, adipisci eum. Facere aut vel, quaerat deleniti
          omnis quae neque cumque voluptatem odit error sit,
          distinctio earum sequi aperiam. Amet, quos.Lorem ipsum
          dolor sit amet consectetur adipisicing elit.
          Earum, adipisci eum. Facere aut vel, quaerat deleniti
          omnis quae neque cumque voluptatem odit error sit,
          distinctio earum sequi aperiam. Amet, quos.Lorem ipsum
          dolor sit amet consectetur adipisicing elit.
          Earum, adipisci eum. Facere aut vel, quaerat deleniti
          omnis quae neque cumque voluptatem odit error sit,
          distinctio earum sequi aperiam. Amet, quos.</p>
      </div>
      <div className={styles.crew}>
        {users.map((item) => (
          <div className={styles.card}>
            <Image
              src={user}
              alt="person"
              width={50}
              height={50} />
            <h1 className={styles.name}>{item.name}</h1>
            <p className={styles.about}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero enim iure iusto ullam dolor. Accusamus quibusdam unde hic sequi laudantium obcaecati, delectus odit, error officia vel quis id? Quaerat, repellat.</p>
            <div>
              <p className={styles.email}>phone:{item.phone}</p>
              <p className={styles.email}>email:{item.email}</p>
              <p className={styles.email}>web:<Link href={item.website} target={"blank"}>{item.website}</Link></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}