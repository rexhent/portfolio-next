require("dotenv").config();
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
const inter = Inter({ subsets: ["latin"] });
import NavBar from "@/components/NavBar/NavBar";
import { ContentLeft, ContentCenter, ContentRight } from "@/components/Content";
import Footer from "@/components/Footer/Footer";
import Button from "@/components/Button";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rexhent App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`yo`}>
        <NavBar />
        <div className={styles.mainContainer}>
          {/* <ContentLeft /> */}
          <ContentCenter />
          {/* <ContentRight /> */}
        </div>
        <Footer />
      </main>
    </>
  );
}
