import React from "react";
import Style from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

export const metadata = {
    title: "Lama Dev Contact Information",
    description: "This is Contact Page",
};

const Contact = () => {
    return (
        <div className={Style.container}>
            <h1 className={Style.title}>Lets Keep in Touch</h1>
            <div className={Style.content}>
                <div className={Style.imgContainer}>
                    <Image
                        src="/contact.png"
                        alt=""
                        fill={true}
                        className={Style.image}
                    />
                </div>
                <form className={Style.form}>
                    <input type="text" placeholder="name" className={Style.input} />
                    <input type="text" placeholder="email" className={Style.input} />
                    <textarea
                        className={Style.textArea}
                        placeholder="message"
                        cols="30"
                        rows="10"
                    ></textarea>
                    <Button url="#" text="Send" />
                </form>
            </div>
        </div>
    );
};

export default Contact;
