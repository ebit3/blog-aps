import React from 'react'
import Style from './page.modul.css';
import Button from '@/components/button/Button';
import Image from 'next/image';

const Category = ({ params }) => {
    return (
        <div className={Style.container}>

            <h1 className={Style.catTitle}>{params.category}</h1>

            <div className={Style.item} key={item.id}>
                <div className={Style.content}>
                    <h1 className={Style.title}>{item.title}</h1>
                    <p className={Style.desc}>{item.desc}</p>
                    <Button text="See More" url="#" />
                </div>
                <div className={Style.imgContainer}>
                    <Image
                        className={Style.img}
                        fill={true}
                        src={item.image}
                        alt=""
                    />
                </div>

            </div>
        </div>
    )
}

export default Category