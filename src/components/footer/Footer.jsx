import React from 'react'
import Style from './page.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={Style.container}>
      <div>@all right reserved.</div>

      <div className={Style.social}>
        <Image src="/1.png" width={15} height={15} className={Style.icon} alt='EbitDev' />
        <Image src="/2.png" width={15} height={15} className={Style.icon} alt='EbitDev' />
        <Image src="/3.png" width={15} height={15} className={Style.icon} alt='EbitDev' />
        <Image src="/4.png" width={15} height={15} className={Style.icon} alt='EbitDev' />
      </div>

    </div>
  )
}

export default Footer