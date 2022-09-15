import { FC } from "react";

import Head from "next/head";
import styles from "./MainLayout.module.css";
import { Navbar } from "../../components/Navbar";

interface Props {
  children: React.ReactNode;
}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Lisa</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>footer</footer>
    </div>
  );
};
