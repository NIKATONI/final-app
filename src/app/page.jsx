import Image from 'next/image'
import styles from './page.module.css'
import Button from '@/components/button/Button'
import Shop from "../../public/shop.png"

// https://api.escuelajs.co/api/v1/products

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.title}>ONLINE SHOPPING</div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur harum molestiae atque quisquam odit, ad assumenda id, quae eius aperiam, qui saepe! Hic animi consectetur, expedita nihil corporis ducimus labore?</p>
        <a href={"/about"} className={styles.seeMore}>SEE MORE</a>
      </div>
      <div className={styles.item}>
        <Image
          src={Shop}
          alt='shop'
          width={300}
          height={400}></Image>
      </div>
    </div>
  )
}
