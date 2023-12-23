import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/button/Button';

export default function Footer() {

  const socials = [
    {
      src: "/1.png",
      alt: "facebook",
      url: "https://www.facebook.com"
    },
    {
      src: "/2.png",
      alt: "instagram",
      url: "https://www.instagram.com"
    },
    {
      src: "/3.png",
      alt: "Picture of the author",
      url: "https://www.twitter.com"
    },
    {
      src: "/4.png",
      alt: "youtube",
      url: "https://www.youtube.com"
    }
  ]

  return (

    <div className={styles.container}>
      <div>@all rights reserved</div>
      <div>
        contact us: <input type="email" placeholder='enter your email' className={styles.contacts} /> <input type="text" placeholder='enter message' className={styles.contacts} /> <Button type="submit" url={""} title={"Submit"} style={styles.submitButton} />
      </div>
      <div className={styles.socialNewtworks}>
        {socials.map((item) => (

          <Link href={item.url} target="#">
            <Image className={styles.icon} src={item.src} width={25} height={25} alt={item.alt} />
          </Link>

        ))}
      </div>
    </div>

  )

}