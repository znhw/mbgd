'use client'
import styles from "./page.module.css";
import TopNav from '@/components/TopNav'
import CatalogPage from "@/components/CatalogPage";
import { useEffect, useState } from "react";


export default function Home() {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    fetch("/data/manga.json")
      .then((res) => res.json())
      .then((data) => setTitles(data))
  }, [])

  return (
    <div className={styles.page}>
      <TopNav/>
      <CatalogPage  titles={titles} />
    </div>
  );
}