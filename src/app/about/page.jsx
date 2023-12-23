import React from 'react'
import styles from "./page.module.css"
import user from "../../../public/User.png"
import Image from 'next/image'

export default function About() {

  const crew = [
    {
      photo: user,
      name: "someone",
      about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti enim autem alias earum eligendi harum labore, quibusdam dicta, possimus voluptatum necessitatibus sapiente! Cum reprehenderit doloribus vitae cupiditate at veritatis voluptatum."
    },
    {
      photo: user,
      name: "someone",
      about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti enim autem alias earum eligendi harum labore, quibusdam dicta, possimus voluptatum necessitatibus sapiente! Cum reprehenderit doloribus vitae cupiditate at veritatis voluptatum."
    },
    {
      photo: user,
      name: "someone",
      about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti enim autem alias earum eligendi harum labore, quibusdam dicta, possimus voluptatum necessitatibus sapiente! Cum reprehenderit doloribus vitae cupiditate at veritatis voluptatum."
    }
  ]

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
        {crew.map((item) => (
          <div className={styles.card}>
            <Image
              src={item.photo}
              alt="person"
              width={50}
              height={50} />
            <h1 className={styles.name}>{item.name}</h1>
            <p className={styles.about}>{item.about}</p>
          </div>
        ))}
      </div>
    </div>
  )
}