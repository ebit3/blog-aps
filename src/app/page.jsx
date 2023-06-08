import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.png';

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <h1 className={styles.title}>Better design for your digital products.</h1>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, est.</p>
                <button className={styles.button}>See our work</button>
            </div>
            <div className={styles.item}>
                <Image src={Hero} alt='hero bg' className={styles.img} />
            </div>
        </div>
    )
}
