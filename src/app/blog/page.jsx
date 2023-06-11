import React from "react";
import Style from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
    return (
        <div className={Style.mainContainer}>
            <Link href="/blog/testId" className={Style.container}>
                <div className={Style.imageContainer}>
                    <Image
                        src="https://images.pexels.com/photos/17137556/pexels-photo-17137556/free-photo-of-kayu-hewan-pohon-kadal.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt=""
                        width={400}
                        height={250}
                        className={Style.image}
                    />
                </div>
                <div className={Style.content}>
                    <h1 className={Style.title}>Test</h1>
                    <p className={Style.desc}>Descriptions</p>
                </div>
            </Link>
            <Link href="/blog/testId" className={Style.container}>
                <div className={Style.imageContainer}>
                    <Image
                        src="https://images.pexels.com/photos/17137556/pexels-photo-17137556/free-photo-of-kayu-hewan-pohon-kadal.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt=""
                        width={400}
                        height={250}
                        className={Style.image}
                    />
                </div>
                <div className={Style.content}>
                    <h1 className={Style.title}>Test</h1>
                    <p className={Style.desc}>Descriptions</p>
                </div>
            </Link>
        </div>
    )
};

export default Blog;
