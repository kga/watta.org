import styles from "./index.module.css"
import Head from "next/head"

export default function Index(links: string[]) {
    return (
        <div className={styles.container}>
        <Head>
            <title>watta.org</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.mainColumn}>
            <h1 className={styles.title}>
            watta.org
            </h1>

            <div>
                <ul>
                    { links.map((link, index) => <li key={index}><a href={link} className={styles.listAnchor}>{link}</a></li>) }
                </ul>
            </div>
        </main>
        </div>
    )
}
