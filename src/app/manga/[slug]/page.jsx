import TopNav from "@/components/TopNav";
import TitlePgCTA from "@/components/TitlePgCTA"
import TitleNav from '@/components/TitleNav'
import styles from '../../page.module.css'
import fs from 'fs'
import path from 'path'

// 1. Generate all static slugs
export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), "public/data/manga.json");
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

  return data.map((manga) => ({
    slug: manga.slug,
  }));
}

// 2. Generate dynamic <title>
export async function generateMetadata({ params }) {
  const filePath = path.join(process.cwd(), "public/data/manga.json");
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const manga = data.find((m) => m.slug === params.slug);

  return {
    title: manga ? manga.title : "Manga Not Found",
  };
}

export default function TitlePage({params}) {

    const filePath = path.join(process.cwd(), "public/data/manga.json");
    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    const manga = data.find((m) => m.slug === params.slug);

    if (!manga) return <div>Not found</div>;
    
    return(
        <>
            <TopNav/>
            <TitleNav/>
            <div className={styles.titleData}>
                <img 
                    src={manga.cover_image}
                    width={240}
                    height={320}
                />
                <div className={styles.titleInfo}>
                    <h1>{manga.title}</h1>
                   <ul className={styles.tags}>
                        {(Array.isArray(manga.genre) ? manga.genre : [manga.genre || ""]).map((g, i) =>
                            g ? <li key={i}>{g}</li> : null
                        )}
                    </ul>
                    <br></br>
                    <p>Author  /  Illustrator </p>
                    <br></br>
                    <div>                   
                        <p>
                            {manga.synopsis}
                            <br></br><br></br>
                            Source: {manga.source}
                        </p>

                    </div>
                   <div>
                        <br></br>

                        <TitlePgCTA/>
                   </div>
                    <br></br>
                   <ul className={styles.tags}>
                        {(Array.isArray(manga.tags) ? manga.tags : [manga.tags || ""]).map((g, i) =>
                            g ? <li key={i}>{g}</li> : null
                        )}
                    </ul>
                </div>
            </div>
            <div className={styles.titleTabs}>
                <div className={styles.tabs}>
                    <span className={styles.tab}>Episodes</span>
                    <span className={styles.tab}>Comments</span>
                    <span className={styles.tab}>Similar</span>
                </div>
            </div>
             <div className={styles.locked}>
                Please <a href="/signin">sign in</a> to view.
            </div>
          
        </>
    )
}